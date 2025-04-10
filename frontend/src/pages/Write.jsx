import React, { useState } from "react";
import PostEditor from "../components/PostEditor";

const Write = () => {
  const [loading, setLoading] = useState(false);

  const handleAI = async (title, setContent) => {
    if (!title) return alert("Enter a title for AI to generate content!");

    setLoading(true);
    try {
      // TODO: Replace this with actual OpenAI backend call
      const fakeAIResponse = `## Introduction\nClean code is crucial for maintainability.\n\n### Benefits:\n- Easier to read\n- Easier to refactor\n- Fewer bugs`;

      setContent(fakeAIResponse);
    } catch (err) {
      console.error("AI generation failed", err);
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
