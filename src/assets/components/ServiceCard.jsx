import React from "react"

import "../css/ServiceCard.css"


const ServiceCard = (props) => {

    return (
        <div className="col-md-4">
            <div className="card h-100">
                <div className="card-body p-3">
                    <img className="my-4" src={props.icon_src} alt={props.icon_alt} width="50" height="50"/>
                    <h4 className="card-title">{ props.title }</h4>
                    <p className="card-text">{ props.description }</p>
                </div>
            </div>
        </div>
    )

}

export default ServiceCard