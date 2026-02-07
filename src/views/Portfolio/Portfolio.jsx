import React from "react";

import Title from "../../components/Title/Title"
import ProjectCard from "../../components/ProjectCard/ProjectCard"

const Portfolio = () => {
    return (
        <main>
            <meta name="description" content="Vous trouverez dans cette section l'ensemble de mes réalisations qui pourons vous permettre de voir le champs de mes compétences en application" />

            <Title 
                display={true}
                title="Portfolio"
                description="Voici quelques-unes de mes réalisations."
            />

             <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <ProjectCard
                        img_url="assets/images/fresh-food.jpg"
                        img_alt="Plateau de fruits et légumes"
                        title="Fresh Food"
                        description="Site de vente de produits frais en ligne"
                        url="/portfolio"
                        footer="Site réalisé avec PHP et MySQL"
                    />                    
                    <ProjectCard
                        img_url="assets/images/restaurant-japonais.jpg"
                        img_alt="Assortiment de sushi et maki japonais"
                        title="Restaurant Akira"
                        description="Site de vente de produits frais en ligne"
                        url="/portfolio"
                        footer="Site réalisé avec WordPress"
                    />
                    <ProjectCard
                        img_url="assets/images/espace-bien-etre.jpg"
                        img_alt="Tête de Boudda avec une fleur de lotus et des pierres empilées sur de l'eau avec un couché de soleil"
                        title="Espace bien-être"
                        description="Site de vente de produits frais en ligne"
                        url="/portfolio"
                        footer="Site réalisé avec LARAVEL"
                    />
                    <ProjectCard
                        img_url="assets/images/seo.jpg"
                        img_alt="Accumulation de mots en référence au SEO"
                        title="SEO"
                        description="Améliration du référencement d'un site e-commerce"
                        url="/portfolio"
                        footer="Utilisation des outils SEO"
                    />
                    <ProjectCard
                        img_url="assets/images/coder.jpg"
                        img_alt="Extrait de code informatique"
                        title="Création d'une API"
                        description="Création d'une API RESTFULL publique"
                        url="/portfolio"
                        footer="PHP - SYMFONY"
                    />
                    <ProjectCard
                        img_url="assets/images/screens.jpg"
                        img_alt="Bureau bien rangé avec un ordinateur bureau, un ordinateur portable et une tablette"
                        title="Maquette d'un site web"
                        description="Création du prototype d'un site"
                        url="/portfolio"
                        footer="Réalisé avec FIGMA"
                    />
                </div>
            </div>
        </main>
        
    )
}

export default Portfolio;