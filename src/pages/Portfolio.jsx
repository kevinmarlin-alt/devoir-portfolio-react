import React from "react";

import Title from "../assets/components/Title"
import ProjectCard from "../assets/components/ProjectCard";

import freshfood_img from "../assets/images/fresh-food.jpg"
import akira_img from "../assets/images/restaurant-japonais.jpg"
import zen_img from "../assets/images/espace-bien-etre.jpg"
import seo_img from "../assets/images/seo.jpg"
import coder_img from "../assets/images/coder.jpg"
import screens_img from "../assets/images/screens.jpg"

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
                        img_url={freshfood_img}
                        img_alt="Plateau de fruits et légumes"
                        title="Fresh Food"
                        description="Site de vente de produits frais en ligne"
                        url="/portfolio"
                        btn_text="Voir le site"
                        footer="Site réalisé avec PHP et MySQL"
                    />                    
                    <ProjectCard
                        img_url={akira_img}
                        img_alt="Assortiment de sushi et maki japonais"
                        title="Restaurant Akira"
                        description="Site de vente de produits frais en ligne"
                        url="/portfolio"
                        btn_text="Voir le site"
                        footer="Site réalisé avec WordPress"
                    />
                    <ProjectCard
                        img_url={zen_img}
                        img_alt="Tête de Boudda avec une fleur de lotus et des pierres empilées sur de l'eau avec un couché de soleil"
                        title="Espace bien-être"
                        description="Site de vente de produits frais en ligne"
                        url="/portfolio"
                        btn_text="Voir le site"
                        footer="Site réalisé avec LARAVEL"
                    />
                    <ProjectCard
                        img_url={seo_img}
                        img_alt="Accumulation de mots en référence au SEO"
                        title="SEO"
                        description="Améliration du référencement d'un site e-commerce"
                        url="/portfolio"
                        btn_text="Voir le site"
                        footer="Utilisation des outils SEO"
                    />
                    <ProjectCard
                        img_url={coder_img}
                        img_alt="Extrait de code informatique"
                        title="Création d'une API"
                        description="Création d'une API RESTFULL publique"
                        url="/portfolio"
                        btn_text="Voir le site"
                        footer="PHP - SYMFONY"
                    />
                    <ProjectCard
                        img_url={screens_img}
                        img_alt="Bureau bien rangé avec un ordinateur bureau, un ordinateur portable et une tablette"
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