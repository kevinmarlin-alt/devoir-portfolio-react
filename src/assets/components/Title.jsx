import React from "react"

const Title = (props) => {

    return (
        <div className="container text-center my-5">
            <h2 className="fs-1">{props.title}</h2>
            <p className="mb-4">{props.description}</p>
            <div className="row justify-content-center">
                <div className="col-4 mb-2 bg-primary" id="break-line"></div>
            </div>
        </div>
    )       

}

export default Title