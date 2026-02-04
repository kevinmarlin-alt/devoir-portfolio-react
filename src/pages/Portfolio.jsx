import React from "react";

import Title from "../assets/components/Title"
import ProjectCard from "../assets/components/ProjectCard";


const Portfolio = () => {
    return (
        <main>
            <Title 
                title="Portfolio"
                description="Voici quelques-unes de mes réalisations."
            />
             <div className="container mb-5">
                <div className="row row-cols-md-3 g-4">
                    <ProjectCard

                        title="Fresh Food"
                        description="Site de vente de produits frais en ligne"
                        url="/portfolio"
                        btn_text="Voir le site"
                        footer="Site réalisé avec PHP et MySQL"
                    />                    
                    <ProjectCard
                        title="Restaurant Akira"
                        description="Site de vente de produits frais en ligne"
                        url="/portfolio"
                        btn_text="Voir le site"
                        footer="Site réalisé avec WordPress"
                    />
                    <ProjectCard
                        title="Espace bien-être"
                        description="Site de vente de produits frais en ligne"
                        url="/portfolio"
                        btn_text="Voir le site"
                        footer="Site réalisé avec LARAVEL"
                    />
                    <ProjectCard
                        title="SEO"
                        description="Améliration du référencement d'un site e-commerce"
                        url="/portfolio"
                        btn_text="Voir le site"
                        footer="Utilisation des outils SEO"
                    />
                    <ProjectCard
                        title="Création d'une API"
                        description="Création d'une API RESTFULL publique"
                        url="/portfolio"
                        btn_text="Voir le site"
                        footer="PHP - SYMFONY"
                    />
                    <ProjectCard
                        title="Maquette d'un site web"
                        description="Création du prototype d'un site"
                        url="/portfolio"
                        btn_text="Voir le site"
                        footer="Réalisé avec FIGMA"
                    />
                </div>
            </div>
        </main>
        
    )
}

export default Portfolio;