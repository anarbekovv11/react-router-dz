import './App.css';
import NavBar from "./components/navBar/Navbar";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Reviews from "./pages/reviews/Reviews";
import Contacts from "./pages/contacts/Contacts";
import AboutUs from "./pages/aboutUs/AboutUs";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <NavBar/>
        <Routes>
            <Route index element={<Services/>} />
            <Route path="portfolio" element={<Portfolio/>} />
            <Route path="reviews" element={<Reviews/>} />
            <Route path="contacts" element={<Contacts/>} />
            <Route path="aboutUs" element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;