import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";
import { ContactDetails } from "./ContactDetails";

class About extends React.Component{
    render() {
        return (
            <div className="About wrapper">
                <div className="content home App">
                <p>I am enthusiastic, motivated and capable of working effectively 
                    in teams and independently as demonstrated by my contributions 
                    to the <a
                            href="https://kodiri.github.io/seasonal-cuisine/#/"
                            alt=""
                           ><span>Seasonal Cuisine</span></a> App</p>
                
                <p>Find out more by contacting me</p>
                <ContactDetails/>
                <h1><NavLink to="/#">Return <span>Home</span>?</NavLink><br/></h1>
                </div>
            </div>
        );
    }
}

export {About}
