import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css"


const Nav = () => {

    function toggleActiveLink(event) {
        const links = document.querySelectorAll("nav div a")
        links.forEach(link => {
            link.classList.remove("active");
        })
        event.target.classList.add("active");
    }

    return (
        <header>
            <nav className="navbar sticky-top navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container">
                    <h1><Link className="navbar-brand">JOHN DOE</Link></h1>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav text-decoration-none">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" onClick={toggleActiveLink}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services" onClick={toggleActiveLink}>SERVICES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio" onClick={toggleActiveLink}>PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={toggleActiveLink}>CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mentions-legals" onClick={toggleActiveLink}>MENTIONS LÉGALES</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Nav;