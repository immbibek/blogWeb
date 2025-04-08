import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import PostList from "../components/PostList";
const Home = () => {
  return (
    <div className="">
      <Hero />
      <Featured />
      <PostList />
    </div>
  );
};

export default Home;
