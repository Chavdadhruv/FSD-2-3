import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from './Home'
import Shop from "./Shop";
import Contact from "./Contact";
import Nopage from "./Nopage";
function Main() {
    return (<div>
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/content">Content</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/content" element={<Contact />} />
                <Route path="*" element={<Nopage />} />
            </Routes>
        </Router>
    </div>)
}
export default Main;