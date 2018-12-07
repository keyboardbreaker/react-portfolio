import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

class Navigation extends React.Component{
    render() {
        return (
            <div className="Navigation">
                <NavLink to="/">1. <span>Stare</span> into his eyes.</NavLink><br/>
                <NavLink to="/Projects">2. <i>"You're a Developer right? <br/>What have you <span>work</span>ed on recently?"</i></NavLink><br/>
                <NavLink to="/About">3. <i>"Tell me a bit <span>about</span> yourself?"</i></NavLink>
            </div>
        );
    }
}

export {Navigation}
