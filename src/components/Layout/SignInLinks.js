import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignInLinks = (props) => {
    return (
        <div className="right">
            <ul className="right">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/create-project">New Project</Link></li>
                <li><a href="/signin" onClick={props.signOut}>Sign out</a></li>
                <li><Link to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</Link></li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => {dispatch(signOut())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInLinks);
