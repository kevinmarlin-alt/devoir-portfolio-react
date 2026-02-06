import React from "react"

import "./ServiceCard.css"

const ServiceCard = (props) => {

    return (
        <div className="col-md-4 d-flex flex-column text-center">
            <div id="service-card" className="card h-100">
                <div className="card-body p-3">
                    <div className="my-4">
                        {props.svg}
                    </div>
                    <h4 className="card-title">{ props.title }</h4>
                    <p className="card-text">{ props.description }</p>
                </div>
            </div>
        </div>
    )

}

export default ServiceCard