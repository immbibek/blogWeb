import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero></Hero>
      </div>
    </Router>
  );
};

export default App;
