import React from "react";
import { Link } from "react-router-dom";

const SignOutLinks = (props) => {
    return (
        <div className="right">
            <ul className="right">
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
            </ul>
        </div>
    )
}

export default SignOutLinks;
