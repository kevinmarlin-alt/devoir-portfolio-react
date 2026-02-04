import React from "react";
import ServiceCard from "../assets/components/ServiceCard"
import Title from "../assets/components/Title";

import "../assets/css/Services.css"

const Services = () => {
    return (
        <main className="py-5 text-center">
            <Title 
                title="Mon offre de services"
                description="Voici les prestations sur lesquelles je peux intervenir"
            />
            <div className="container px-4">
                <div className="row g-4 my-4">
                    <ServiceCard 
                        icon_src="../../../../public/assets/icons/brush.svg"
                        icon_alt="icon de pinceau"
                        title="UX Design"
                        description="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
                    />
                    <ServiceCard 
                        icon_src="../../../../public/assets/icons/brush.svg"
                        icon_alt="icon de pinceau"
                        title="Développement web"
                        description="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
                    />
                    <ServiceCard 
                        icon_src="../../../../public/assets/icons/brush.svg"
                        icon_alt="icon de pinceau"
                        title="Référencement"
                        description="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
                    />

                </div>
            </div>
        </main>
    )
}

export default Services;