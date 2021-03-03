import React from "react";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux"; 

const Navbar = (props) => {
    const navlink = (props.auth.uid) ? <SignInLinks /> : <SignOutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <div className="brand-logo"><b>TeamDiaries</b></div>
                <div>{navlink}</div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);