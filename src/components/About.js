import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";

class About extends React.Component{
    render() {
        return (
            <div className="About wrapper">
                <div className="content home ">
                <p>DM me with <span>jobs</span>: yujinost@gmail.com</p>
                <h1><NavLink to="/#">Return <span>Home</span>?</NavLink><br/></h1>
                </div>
            </div>
        );
    }
}

export {About}
