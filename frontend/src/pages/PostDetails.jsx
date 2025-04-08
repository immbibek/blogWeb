import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../context/PostContext";

const PostDetails = () => {
  const { id } = useParams();
  const { posts } = useContext(PostContext);

  const post = posts.find((p) => p.id.toString() === id);

  if (!post) return <p>Post not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[300px] object-cover mb-4"
      />
      <p className="text-sm text-blue-600">{post.category}</p>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600">{post.date}</p>
      <p className="mt-4 text-lg leading-relaxed">{post.content}</p>
    </div>
  );
};

export default PostDetails;
