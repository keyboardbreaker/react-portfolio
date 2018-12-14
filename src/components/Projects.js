import React from "react";
import "./Projects.css";
import { NavLink } from "react-router-dom";

class Projects extends React.Component{
    render() {
        return (
            <div className="Projects">
                <h1><i>Well I've worked on:</i></h1>
                <div className='borderBox'> 
                    <h1><i class="fab fa-github" aria-hidden="true"></i><span>COOK</span> WITH <a 
                        href="https://github.com/keyboardbreaker/react-portfolio" 
                        alt="">SEASONAL CUISINE</a></h1>
                </div> 
                <div className='borderBox'> 
                    <h1>KODIRI IS <span>LOVE</span>, <a 
                        href="https://github.com/keyboardbreaker/kodflix" 
                        alt="">KODFLIX IS LIFE</a></h1>
                </div>
                <div className='borderBox'> 
                    <h1><i class="fab fa-github" aria-hidden="true"></i>MY <a 
                        href="https://github.com/keyboardbreaker/react-portfolio" 
                        alt="">PORTFOLIO</a></h1>
                </div> 
                <h1><NavLink to="/#">"Wow! Please tell me <span>more."</span></NavLink><br/></h1>
            </div>
        );
    }
}

export {Projects}
