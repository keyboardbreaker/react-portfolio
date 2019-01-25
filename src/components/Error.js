import React from "react";
import './Error.css';
import { NavLink } from "react-router-dom";

class Error extends React.Component{
    render() {
        return (
            <div className="Error">
                <h1>Path Does not Exist</h1>
                <h1>
                    <NavLink to="/#">
                    Return <span>Home</span>?
                    </NavLink>
                    <br />
                </h1>
            </div>
        );
    }
}

export {Error}
