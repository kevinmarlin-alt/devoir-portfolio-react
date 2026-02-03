import React from "react";
import { Link } from "react-router-dom";

import "../css/Footer.css"

const Footer = () => {

    return (
        <footer className="bg-dark" >
            <div className="container">
                <div className="row pt-5 pb-5">
                    <section className="col-md-4">
                        <p className="fs-5 mb-2">John Doe</p>
                        <address>
                            <p className="fs-6 mb-0">40 rue Laure Diebold</p>
                            <p className="fs-6 mb-0">69009 Lyon, France</p>
                            <p className="fs-6 mb-0"><a href="tel:+331020304050">10 20 30 40 50</a></p>
                            <p className="fs-6 mb-0"><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                        </address>
                    </section>
                    <section className="col-md-4">
                        <p className="fs-5 mb-2">Liens utiles</p>
                        <p className="fs-6 mb-0">
                            <Link to="/">Accueil</Link>
                        </p>
                        <p className="fs-6 mb-0">
                            <Link to="/services">Services</Link>
                        </p>
                        <p className="fs-6 mb-0">
                            <Link to="/portfolio">Portfolio</Link>
                        </p>
                        <p className="fs-6 mb-0">
                            <Link to="/contact">Me contacter</Link>
                        </p>
                        <p className="fs-6 mb-0">
                            <Link to="/mentions-legals">Mentions légales</Link>
                        </p>
                    </section>
                    <section className="col-md-4">
                        <p className="fs-5 mb-2">Mes dernières réalisations</p>
                        <p className="fs-6 mb-0">Fresh Food</p>
                        <p className="fs-6 mb-0">Restaurant Akira</p>
                        <p className="fs-6 mb-0">Espace bien-être</p>
                        <p className="fs-6 mb-0">SEO</p>
                        <p className="fs-6 mb-0">Création d'une API</p>
                        <p className="fs-6 mb-0">Maquette de site</p>
                    </section>
                </div>
            </div>
        </footer>
    )

}

export default Footer;