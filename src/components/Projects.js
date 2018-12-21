import React from "react";
import "./Projects.css";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

class Projects extends React.Component{
    render() {
        return (
            <div className="Projects">
                <h1><i>Well I've worked on:</i></h1>
                <div className='borderBox'> 
                    <h1><a 
                        href="https://github.com/keyboardbreaker/seasonal-cuisine" 
                        alt="">SEASONAL CUISINE</a></h1>
                </div> 
                <div className='borderBox'> 
                    <h1><a 
                        href="https://github.com/keyboardbreaker/kodflix" 
                        alt="">LATESTFLIX</a></h1>
                </div>
                <div className='borderBox'> 
                    <h1><a 
                        href="https://github.com/keyboardbreaker/react-portfolio" 
                        alt="">PORTFOLIO</a></h1>
                </div> 
                <h1><NavLink to="/#">Return <span>Home</span>?</NavLink><br/></h1>
            </div>
        );
    }
}

export {Projects}
