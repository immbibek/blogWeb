import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post"; // <- if it's a separate page
import PostDetails from "./pages/PostDetails";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
