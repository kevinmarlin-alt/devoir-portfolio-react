import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to="/portfolio">PORTFOLIO</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/mentions-legals">MENTIONS LÉGALES</Link></li>
            </ul>
        </div>
    )
}

export default Nav;