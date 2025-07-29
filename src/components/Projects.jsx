import React from "react";
import "./Projects.css";
import { NavLink } from "react-router-dom";
import latestFlix from "../images/latest-flix.png";
import seasonal from "../images/seasonal-cuisine.png";
import portfolio from "../images/portfolio.png";
import "./Navigation.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects wrapper">
        <div className="home content">
          <h4>
            <i>That's right! </i>
          </h4>
          <h4>
            I'm a <span>Full Stack JavaScript</span> Developer
          </h4>
          <h4>
            <i>and I've worked on:</i>
          </h4>
          <div className="borderBox">
            <h1>
              <a
                href="https://github.com/keyboardbreaker/seasonal-cuisine"
                alt=""
              >
                SEASONAL CUISINE
              </a>
            </h1>
            <a
                href="https://kodiri.github.io/seasonal-cuisine/#/"
                alt=""
              >
              <img src={seasonal} alt={"proj1"} className="projects" />
              </a>

          </div>
          <div className="borderBox">
            <h1>
              <a href="https://github.com/keyboardbreaker/kodflix" alt="">
                LATESTFLIX
              </a>
            </h1>
            <a
                href="https://latestflix.herokuapp.com/"
                alt=""
              >
              <img src={latestFlix} alt={"proj2"} className="projects" />
              </a>
            
          </div>
          <div className="borderBox">
            <h1>
              <a
                href="https://github.com/keyboardbreaker/react-portfolio"
                alt=""
              >
                PORTFOLIO
              </a>
            </h1>
            <img src={portfolio} alt={"proj3"} className="projects" />
          </div>
          <h1>
            <NavLink to="/#">
              Return <span>Home</span>?
            </NavLink>
            <br />
          </h1>
        </div>
      </div>
    );
  }
}

export { Projects };
