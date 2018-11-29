import React from "react";
import MyFace from "../images/about.jpg";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MyFace} alt={"MyFace"} className="myface" />
        <h1>Welcome to my Portfolio!</h1>
      </header>
    </div>
  );
};

export { Home };
