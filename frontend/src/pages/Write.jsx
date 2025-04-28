import React, { useState } from "react";
import PostEditor from "../components/PostEditor";

const Write = () => {
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false); // New state for publishing loading

  const handleAI = async (title, setContent) => {
    if (!title) return alert("Enter a title for AI to generate content!");

    setLoading(true);
    try {
      const res = await fetch("https://blogwebbackend-8gyj.onrender.com/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      const data = await res.json();
      if (data.content) {
        setContent(data.content);
      } else {
        alert("Failed to generate content");
      }
    } catch (err) {
      console.error("AI generation failed", err);
      alert("Something went wrong while generating content.");
    }
    setLoading(false);
  };

  const handlePostSubmit = async (postData) => {
    try {
      setPosting(true);
      const res = await fetch("https://blogwebbackend-8gyj.onrender.com/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Post published successfully!");
        window.location.href = "/"; // Redirect to Home after posting
      } else {
        alert(data.error || "Failed to publish post.");
      }
    } catch (error) {
      console.error("Post creation failed:", error);
      alert("Something went wrong while publishing the post.");
    }
    setPosting(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create a New Post 📝</h1>

      <PostEditor
        onSubmit={handlePostSubmit}
        onGenerateAI={handleAI}
        aiLoading={loading}
        posting={posting} // <-- Pass posting prop also
      />
    </div>
  );
};

export default Write;
