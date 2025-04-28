import "./App.css";
import React from "react";
import Write from "./pages/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import PostDetails from "./pages/PostDetails";
import { ThemeProvider } from "./ThemeContext";
import Contact from "./pages/Contact";
import WevDev from "./pages/wevdev";
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/write" element={<Write />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/wevdev" element={<WevDev />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
