import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
    state = {
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
        this.props.signIn(this.state);
    }
    render() {
        if(this.props.auth.uid){ return <Redirect to="/dashboard"/>}
        return (
            <div className="container section">
                <div className="card">
                    <div className="card-content row">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <span className="card-title"><b>Sign In</b></span>
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
                            <button className="waves-effect waves-light btn-large">Sign In</button>
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
        signIn: (credentials) => { dispatch(signIn(credentials)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);