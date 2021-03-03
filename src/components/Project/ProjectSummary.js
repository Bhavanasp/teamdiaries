import React from "react";
import { Link } from "react-router-dom";

const ProjectSummary = (props) => {
    return (
        <div className="container section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{props.project.title}</span>
                </div>
                <div className="card-action grey lighten-4 grey-text row">
                    <div className="col s12 m6">
                        <div>Posted by {props.project.authorFirstName + " " + props.project.authorLastName}</div>
                        <div>{props.project.createdAt}</div>
                    </div>
                    <div className="col s12 m2 offset-m1 right">
                        <Link to={"/projects/" + props.project.id}><button className="waves-effect waves-light btn-large">Open</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary;