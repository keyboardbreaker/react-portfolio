import React, { Component } from 'react';
import './App.css';
import MyFace from '../src/images/about.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={MyFace} alt={"MyFace"} className="myface"/>
          <h1>Welcome to my Portfolio!</h1>
        </header>
      </div>
    );
  }
}

export default App;
