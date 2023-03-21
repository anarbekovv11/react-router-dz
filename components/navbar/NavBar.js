import {Link} from "react-router-dom";
import style from './navBar.module.css'

export default function NavBar () {
    return (
        <ul>
            <li>
                <Link to="/" className={style.link}>Services</Link>
            </li>
            <li>
                <Link to="/portfolio" className={style.link}>Portfolio</Link>
            </li>
            <li>
                <Link to="/reviews" className={style.link}>Reviews</Link>
            </li>
            <li>
                <Link to="/contacts" className={style.link}>Contacts</Link>
            </li>
            <li>
                <Link to="/aboutUs" className={style.link}>About Us</Link>
            </li>
        </ul>
    )
}