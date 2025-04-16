import React, { useState } from "react";
import PostEditor from "../components/PostEditor";

const Write = () => {
  const [loading, setLoading] = useState(false);

  const handleAI = async (title, setContent) => {
    if (!title) return alert("Enter a title for AI to generate content!");

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/generate", {
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

  const handlePostSubmit = (data) => {
    console.log("Submitting Post:", data);
    // TODO: Send to backend
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create a New Post 📝</h1>

      <PostEditor
        onSubmit={handlePostSubmit}
        onGenerateAI={handleAI}
        aiLoading={loading}
      />
    </div>
  );
};

export default Write;
