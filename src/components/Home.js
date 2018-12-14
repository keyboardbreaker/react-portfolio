import React from "react";
import MyFace from "../images/about.jpg";
import { Navigation } from "./Navigation";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "What do you do next?"
    };
  }

  componentWillMount = () => {
    setTimeout(() => {
      this.setState({ message: "(Choose)" });
    }, 3000);
    setTimeout(() => {
      this.setState({ message: "(Choose something to say)" });
    }, 10000);
  };

  render() {
    return (
      <div>
        <div className="App">
          <body class="home">
            <h1>You've Bumped into this guy</h1>
            <img src={MyFace} alt={"MyFace"} className="myface" />
            <p>Something about him is <span>alluring</span>, you approach him.</p>
            <h1>{this.state.message}</h1>
            <h1><Navigation /></h1>
          </body>
        </div>
      </div>
    );
  }
}
export { Home };
