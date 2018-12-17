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
                <NavLink to="/#">3. <i>"I have a <span>job</span> offer!"</i></NavLink><br/>
                <NavLink to="/#"></NavLink><br/>
            </div>
        );
    }
}

export {Navigation}
