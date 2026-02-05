import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Nav.css"

function closeCollapse() {
    const navCollapse = document.querySelector(".navbar-collapse")
    navCollapse.classList.toggle("show")
}

const Nav = () => {

    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container">
                    <h1 className="navbar-brand mb-0"><Link to="/">JOHN DOE</Link></h1>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item me-2 my-2">
                                <NavLink to="/" onClick={closeCollapse}>home</NavLink>
                            </li>
                            <li className="nav-item me-2 my-2">
                                <NavLink to="/services" onClick={closeCollapse}>services</NavLink>
                            </li>
                            <li className="nav-item me-2 my-2">
                                <NavLink to="/portfolio" onClick={closeCollapse}>portfolio</NavLink>
                            </li>
                            <li className="nav-item me-2 my-2">
                                <NavLink to="/contact" onClick={closeCollapse}>contact</NavLink>
                            </li>
                            <li className="nav-item me-2 my-2">
                                <NavLink to="/mentions-legals" onClick={closeCollapse}>mentions légales</NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Nav;