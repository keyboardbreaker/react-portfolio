import React from "react";
import MyFace from "../images/about.jpg";
import { Navigation } from "./Navigation";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>You've Bumped into this guy</h1>
        <img src={MyFace} alt={"MyFace"} className="myface" />
      </header>
      <h1>What do you do next?</h1>
      <h1>      <Navigation /></h1>
    </div>
  );
};

export { Home };
