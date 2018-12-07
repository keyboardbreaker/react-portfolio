import React, { Component } from "react";
import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Error } from "./components/Error";
import { Navigation } from "./components/Navigation";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
