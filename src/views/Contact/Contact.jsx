import {React} from "react";

import Title from "../../components/Title/Title"
import Address from "../../components/Address/Address"

const Contact = () => {
    const inputs = document.querySelectorAll("input")
    const textArea = document.querySelector("textarea")
    
    function handleSubmit(event) {
        event.preventDefault()
        event.stopPropagation()

        checkValidation()

        showSubmitInfo()
        clearValidation()

        const form = document.querySelector("form")
        form.reset()

        // inputs.forEach(input => input.classList.remove("is-valid", "is-invalid"))
        // textArea.classList.remove("is-valid", "is-invalid")
    }

    function clearValidation(){

    }

    function showSubmitInfo(){
        const submitInfo = document.querySelector("form p")
        submitInfo.classList.remove("d-none")
        setTimeout(() => {
            submitInfo.classList.add("d-none")
        }, 2000)
    }

    function checkValidation() {
        
        inputs.forEach(input => {
            input.classList.remove("is-valid", "is-invalid")
            console.log(input.checkValidity())
            input.checkValidity() ? input.classList.add("is-valid") : input.classList.add("is-invalid") 
        })
        
        textArea.classList.remove("is-valid", "is-invalid")
        textArea.checkValidity() ? textArea.classList.add("is-valid") : textArea.classList.add("is-invalid")
    }


    return (
        
        <main>
            <meta name="description" content="Laissez-moi un message et rencontrons-nous ! Vous trouverez un formulaire de contact et également mes coordonnées." />
            <Title
                display={false}
                title="Contact"
                description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."
            />
            <div className="container">
                <div className="row mx-2 mb-5">
                    <div className="card border border-0 shadow">
                        <div className="container">
                            <div className="row">

                                <div className="card-body col-md-6 py-4">
                                    <h3 className="border-bottom border-primary border-3 mb-4">Formulaire de contact</h3>
                                    <form onSubmit={handleSubmit}  className="d-flex flex-column" action="#" noValidate>
                                        <input type="text" name="name" id="name" className="form-control mb-2" placeholder="Votre nom" required />
                                        <input type="email" name="email" id="email" className="form-control mb-2" placeholder="Votre adresse email" required/>
                                        <input type="tel" name="phone" id="phone" className="form-control mb-2" placeholder="Votre numéro de téléphone" required/>
                                        <input type="text" name="subject" id="subject" className="form-control mb-2" placeholder="Sujet" required/>
                                        <textarea name="message" id="message" className="form-control mb-2" rows="15" placeholder="Votre message" required></textarea>
                                        <p className="text-center d-none">Notre message à bien été envoyé !</p>
                                        <button type="submit" className="btn btn-primary mx-auto">Envoyer</button>
                                    </form>
                                </div>

                                <div className="card-body col-md-6 py-4">
                                    <h3 className="border-bottom border-primary border-3 mb-4">Mes coordonnées</h3>

                                    <Address />
                                    
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.254304924359!2d4.796403977113233!3d45.7786619710808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1770280756102!5m2!1sfr!2sfr"
                                        width="600"
                                        height="450"
                                        title="Mon adresse"
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                        className="w-100"
                                        >
                                    </iframe>
                                </div>

                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </main>
        
        
    )
}

export default Contact;
