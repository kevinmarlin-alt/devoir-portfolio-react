import React from "react"

const Title = (props) => {

       

    return (
        <div className="container-fluide text-center mb-5">
            <img  className={props.display ? "img-fluid" : "d-none"} src="/assets/images/banner.jpg" alt="Onde éléctrique bleu sur fond bleu" height="300" width="1920" />
            <h1 className="fs-1 mt-5">{props.title}</h1>
            <h2 className="fs-6 fw-normal mb-4">{props.description}</h2>
            <div className="row justify-content-center">
                <div className="col-4 mb-2 bg-primary" id="break-line"></div>
            </div>
        </div>
    )       
}

export default Title