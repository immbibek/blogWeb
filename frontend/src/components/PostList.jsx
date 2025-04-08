import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <section className="w-full px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="rounded-2xl shadow-lg overflow-hidden">
            <Link to={`/post/${post.id}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[220px] object-cover hover:scale-105 transition-all ease duration-300"
              />
            </Link>
            <div className="p-4 flex flex-col gap-2">
              <p className="text-sm font-medium text-blue-600">
                {post.category}
              </p>
              <Link to={`/post/${post.id}`}>
                <h2 className="text-lg font-semibold hover:underline hover:decoration-red-500">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostList;
