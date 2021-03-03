import React from "react";
import ProjectSummary from "./ProjectSummary";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const ProjectList = (props) => {
    const projectList = props.projects.map(project => {
        if(project) {
            return (
                <div key={project.id}>
                    <ProjectSummary project={project} />
                </div>
            )
        }
        else {
            return null;
        }
    });
    if(projectList.length!==0) {
        return (
            <div className="section">
                {projectList}
            </div>
        )
    }
    else{
        return (
            <div className="section">
                <p>No projects.</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const cont = state.firestore.ordered.projects;
    const projects = (cont==null)? [] : cont;
    return {
        projects: projects
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "projects"}
    ])
)(ProjectList);