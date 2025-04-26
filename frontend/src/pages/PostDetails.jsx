import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams(); // Get post id from URL parameters
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching post with id:", id); // Log the id to check if it's correct

    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        if (res.data.success) {
          setPost(res.data.post); // Match the response field name with your backend
        } else {
          console.error("Post not found");
        }
      } catch (err) {
        console.error("Failed to fetch post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]); // Only re-fetch when the id changes

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!post) return <p className="text-center py-10">Post not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[300px] object-cover mb-4"
      />
      <p className="text-sm text-blue-600">{post.category}</p>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="mt-4 text-lg leading-relaxed">{post.content}</p>
    </div>
  );
};

export default PostDetails;
