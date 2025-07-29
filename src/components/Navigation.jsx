import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

class Navigation extends React.Component{
    render() {
        return (
            <div className="Navigation">
                <NavLink to="/Projects">1. <i>"You're a <span>developer</span> right?"</i></NavLink><br/>
                <NavLink to="/About">2. <i>"Tell me <span>about</span> yourself?"</i></NavLink><br/>
            </div>
        );
    }
}

export {Navigation}
