import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostCard from "../components/PostsCard"; // Make sure this path is correct

const Posts = () => {
  const { posts } = useContext(PostContext);

  console.log("Posts in component:", posts);

  return (
    <section className="w-full px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 lg:ml-6">
        Recent Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post) => (
          // Ensure we're using the correct property for the key

          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
