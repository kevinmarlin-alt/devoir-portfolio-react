import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="container-fluid" >
            <div className="row bg-dark">
                <section>
                    <p>John Doe</p>
                    <address>
                        <p>40 rue Laure Diebold</p>
                        <p>69009 Lyon, France</p>
                        <p><a href="tel:+331020304050">10 20 30 40 50</a></p>
                        <p><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                    </address>
                </section>
                <section>
                    <p>Liens utiles</p>
                    <Link to="/">Accueil</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Me contacter</Link>
                    <Link to="/mentions-legals">Mentions légales</Link>
                </section>
                <section>
                    <p>Mes dernières réalisations</p>
                    <p>Fresh Food</p>
                    <p>Restaurant Akira</p>
                    <p>Espace bien-être</p>
                    <p>SEO</p>
                    <p>Création d'une API</p>
                    <p>Maquette de site</p>
                </section>
            </div>
        </footer>
    )

}

export default Footer;