import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Post from "../pages/Post";
const Home = () => {
  return (
    <div className="">
      <Hero />
      <Featured />
      <Post />
    </div>
  );
};

export default Home;
