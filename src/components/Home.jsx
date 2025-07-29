import React from "react";
import MyFace from "../images/about.jpg";
import { Navigation } from "./Navigation";
import { ContactDetails } from "./ContactDetails";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "What do you do next?"
    };
  }
  
  render() {
    return (
      <div>
        <div className="App wrapper">
          <div className="home content">
            <h1>You've Bumped into this guy</h1>
            <img src={MyFace} alt={"MyFace"} className="myface" />
            <p>Something about him is <span>alluring</span>, you approach him.</p>
            <h1>{this.state.message}</h1>
            <h1><Navigation /></h1>
            Contact Details:
            <ContactDetails />
          </div>
        </div>
      </div>
    );
  }
}
export { Home };
