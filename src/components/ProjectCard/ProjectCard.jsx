import React from "react";
import { Link } from "react-router-dom";

import "./ProjectCard.css"

const ProjectCard = (props) => {
    return (
        <div className="col">
            <div id="project-card" className="card text-center h-100 ">
                <img src={props.img_url} alt={props.img_alt} className="card-img-top" />
                <div className="card-body py-4 flex-column">
                    <h5 className="card-title">{ props.title }</h5>
                    <p className="card-text">{ props.description }</p>
                    <Link to={props.url} className="btn btn-primary">{props.btn_text}</Link>
                </div>
                    <div className="card-footer">
                        <p className="mb-0">{ props.footer }</p>
                    </div>
            </div>
        </div>
    )
}

export default ProjectCard;