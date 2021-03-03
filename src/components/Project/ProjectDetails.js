import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteProject } from "../../store/actions/projectActions"
import { Redirect } from "react-router-dom";

class ProjectDetails extends Component {
    handleClick = (e) => {
        this.props.deleteProject(this.props.project.id);
        this.props.history.push("/dashboard");
    }
    render() {
        if(!this.props.auth.uid){ return <Redirect to="/signin"/>}
        if(this.props.project!=null){
            return (
                <div className="container section">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{this.props.project.title}</span>
                            <p>{this.props.project.body}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text row">
                            <div className="col s12 m6">
                                <div>Posted by {this.props.project.authorFirstName+" "+this.props.project.authorLastName}</div>
                                <div>{this.props.project.createdAt}</div>
                            </div>
                            <div className="col s12 m2 offset-m1 right">
                                <button className="waves-effect waves-light btn-large" onClick={this.handleClick}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="container section">
                    <h4>
                        Oops! page not found
                    </h4>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const cont = state.firestore.ordered.projects;
    const fireProject = (cont == null)? null : state.firestore.ordered.projects.find(project => project.id === id);
    return {
        auth: state.firebase.auth,
        project: fireProject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (id) => { dispatch(deleteProject(id)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetails);