import React, { Component } from "react";
import ProjectList from "../Project/ProjectList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
    render() {
        if (!this.props.auth.uid) { return <Redirect to="/signin" /> }
        return (
            <div className="container">
                <ProjectList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Dashboard);