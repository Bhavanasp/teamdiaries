import React, { Component } from "react";
import { connect } from "react-redux";
import { addProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
    state = {
        title: "",
        body: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push("/dashboard");
    }
    render() {
        if(!this.props.auth.uid){ return <Redirect to="/signin"/>}
        return (
            <div className="container section">
                <div className="card">
                    <div className="card-content row">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <span className="card-title"><b>New Project</b></span>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="title" className="materialize-textarea" data-length="50" onChange={this.handleChange} />
                                    <label htmlFor="title">Project Title</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="body" className="materialize-textarea" data-length="500" onChange={this.handleChange} />
                                    <label htmlFor="body">Description</label>
                                </div>
                            </div>
                            <button className="waves-effect waves-light btn-large">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => { dispatch(addProject(project)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);