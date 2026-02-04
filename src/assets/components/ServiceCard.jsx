import React from "react"

import "../css/ServiceCard.css"


const ServiceCard = (props) => {

    return (
        <div className="col-md-4 text-center">
            <div className="card h-100">
                <div className="card-body p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={props.icon_class} viewBox="0 0 16 16">
                        <path d={props.icon_path}/>
                    </svg>
                    <h4 className="card-title">{ props.title }</h4>
                    <p className="card-text">{ props.description }</p>
                </div>
            </div>
        </div>
    )

}

export default ServiceCard