import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Post from "../pages/Post";
const Home = () => {
  return (
    <div className="">
      <Hero
        image="/banner.jpg"
        category="Web Development"
        link="/wevdev"
        title="Building Progressive Web Apps: Bridging The Gap Between Web And Mobile"
      />
      <Featured />
      <Post />
    </div>
  );
};

export default Home;
