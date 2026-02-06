import React from "react";
import "./Home.css"

import johnDoeAbout from "../../assets/images/john-doe-about.jpg"

const Home = () => {
    return (
        <main>
            <meta name="description" content="Bonjour a vous ! Je m'appel John Doe. Ce site internet vous permettra de mieux me connaitre et de vous présenter l'ensemble de mes domaines de compétences" />

            <header className="text-light text-center mb-5">
                <h1 className="mb-4">Bonjour, je suis John Doe</h1>
                <h2 className="mb-4">Développeur web full stack</h2>
                <button type="button" class="btn btn-danger btn-sm px-3">En savoir plus</button>
            </header>
            <div className="container">
                <div className="row mx-2 mb-5">
                    <div className="card border border-0 shadow">
                        <div className="container">
                            <div className="row">
                                <div className="card-body col-md-6 py-4">
                                    <h3 className="border-bottom border-primary border-3 mb-4">A propos</h3>
                                    <img src={johnDoeAbout} alt="John Doe" className="w-100 mb-2"/>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?                            </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?                            </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?                            </p>

                                </div>

                                <div className="card-body col-md-6 py-4">
                                    <h3 className="border-bottom border-primary border-3 mb-4">Mes compétences</h3>
                                    <ul>
                                        <li className="mb-4">
                                            <p className="mb-1">HTML5 90%</p>
                                            <div className="progress" role="progressbar" aria-label="HTML skills" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-danger" style={{ width: "90%" }}></div>
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <p className="mb-1">CSS3 80%</p>
                                            <div className="progress" role="progressbar" aria-label="CSS3 skills" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <p className="mb-1">JAVASCRIPT 70%</p>
                                            <div className="progress" role="progressbar" aria-label="JAVASCRIPT skills" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <p className="mb-1">PHP 60%</p>
                                            <div className="progress" role="progressbar" aria-label="PHP skills" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <p className="mb-1">REACT 50%</p>
                                            <div class="progress" role="progressbar" aria-label="REACT skills" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar bg-primary" style={{ width: "50%" }}></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;