import React, { Component } from "react";
import { signUp } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        if(this.props.auth.uid){ return <Redirect to="/dashboard"/>}
        return (
            <div className="container section">
                <div className="card">
                    <div className="card-content row">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <span className="card-title"><b>Sign Up</b></span>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="firstName" type="text" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="firstName">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="lastName" type="text" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="lastName">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <button className="waves-effect waves-light btn-large">Sign Up</button>
                        </form>
                    </div>
                </div>
                <div>{
                    (this.props.authError == null) ? null : <div className="row">
                        <div className="card-panel red lighten-4 col s12 red-text">
                            <p className="center"><b>{this.props.authError}</b></p>
                        </div>
                    </div>
                }</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => { dispatch(signUp(newUser)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);