import React, { useState } from "react";

const PostEditor = ({ onSubmit, onGenerateAI, aiLoading }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const postData = {
      title,
      category,
      image: imageUrl,
      date,
      content,
    };
    onSubmit(postData);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-5xl font-bold placeholder-gray-400 outline-none mb-8"
      />

      {/* Category and Date */}
      <div className="flex items-center justify-between mb-6 text-gray-500 text-sm">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="outline-none"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="outline-none"
        />
      </div>

      {/* Image URL */}
      <input
        type="text"
        placeholder="Paste Image URL (Optional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 outline-none"
      />

      {/* Image Preview */}
      {imageUrl && (
        <div className="w-full h-[400px] mb-10 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <textarea
        placeholder="Tell your story..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full min-h-[400px] text-lg leading-relaxed outline-none resize-none placeholder-gray-400"
      />

      {/* Buttons */}
      <div className="flex gap-4 mt-10">
        <button
          onClick={() => onGenerateAI(title, setContent)}
          disabled={aiLoading}
          className="px-6 py-2 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all disabled:opacity-50"
        >
          {aiLoading ? "Generating..." : "✨ Generate with AI"}
        </button>

        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all"
        >
          🚀 Publish
        </button>
      </div>
    </div>
  );
};

export default PostEditor;
