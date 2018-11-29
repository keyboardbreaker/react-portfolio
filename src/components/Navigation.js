import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component{
    render() {
        return (
            <div className="Navigation">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/About">About</NavLink>
            </div>
        );
    }
}

export {Navigation}
