import React, { Component } from "react";
import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Error } from "./components/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
