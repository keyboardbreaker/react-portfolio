import React from "react";
import "./Projects.css";

class Projects extends React.Component{
    render() {
        return (
            <div className="Projects">
                <div className='borderBox'> 
                    <h1>KODIRI IS <span>LOVE</span>, <a 
                        href="https://github.com/keyboardbreaker/kodflix" 
                        alt="">KODFLIX IS LIFE</a></h1>
                </div>
                <div className='borderBox'> 
                    <h1><i class="fab fa-github" aria-hidden="true"></i>ONE DAY <a 
                        href="https://github.com/keyboardbreaker/react-portfolio" 
                        alt="">PORTFOLIO</a></h1>
                </div> 
            </div>
        );
    }
}

export {Projects}
