import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component{
    render() {
        return (
            <div className="Navigation">
                <NavLink to="/">1. (*Stay silent*) <span>Stare</span> into his eyes.</NavLink><br/>
                <NavLink to="/Projects">2. "You're a Developer right? <br/>What have you <span>work</span>ed on recently?"</NavLink><br/>
                <NavLink to="/About">3. "Tell me a bit <span>about</span> yourself?"</NavLink>
            </div>
        );
    }
}

export {Navigation}
