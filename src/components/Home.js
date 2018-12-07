import React from "react";
import MyFace from "../images/about.jpg";
import { Navigation } from "./Navigation";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <body class="home">
      <h1>You've Bumped into this guy</h1>
      <img src={MyFace} alt={"MyFace"} className="myface" />
      <p>Something about him is <span>alluring</span>, you approach him.</p>
      <h1>What do you do next? <i>(Choose)</i></h1>
      <h1><Navigation /></h1>
      </body>
    </div>
  );
};

export { Home };
