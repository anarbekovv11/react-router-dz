import React, {useEffect, useState} from 'react';
import style from './aboutAs.module.css'
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
    if (!post) return null;

    return (
        <tbody>
        {
            post.map((post, k) => (
                <tr key={k}>
                    <td>{post.id}</td>
                    <td>{post.name}</td>
                    <td>{post.username}</td>
                    <td>{post.email}</td>
                </tr>
            ))
        }
        </tbody>
    );
}