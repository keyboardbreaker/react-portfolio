import React, { Component } from "react";
import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Error } from "./components/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} />
          <Route component={Error}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
