import React from "react"

const ServiceCard = (props) => {

    return (
        <div id="service-card" className="col-md-4 d-flex flex-column text-center">
            <div className="card h-100">
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