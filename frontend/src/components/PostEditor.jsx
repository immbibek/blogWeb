// components/PostEditor.jsx

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const PostEditor = ({ onSubmit, onGenerateAI, aiLoading }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const previewUrl = URL.createObjectURL(file);
    setImage({ file, preview: previewUrl });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleSubmit = () => {
    const postData = {
      title,
      category,
      image: image?.preview || "",
      date,
      content,
    };
    onSubmit(postData);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />

      <div
        {...getRootProps()}
        className={`w-full px-4 py-10 text-center border-2 border-dashed rounded-lg cursor-pointer ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {image ? (
          <img
            src={image.preview}
            alt="Preview"
            className="mx-auto max-h-48 rounded-md object-cover"
          />
        ) : (
          <p className="text-gray-500">
            {isDragActive
              ? "Drop the image here..."
              : "Drag and drop an image here, or click to select"}
          </p>
        )}
      </div>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />

      <button
        onClick={() => onGenerateAI(title, setContent)}
        disabled={aiLoading}
        className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
      >
        {aiLoading ? "Generating..." : "✍️ Generate with AI"}
      </button>

      <textarea
        placeholder="Write your content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full px-4 py-3 min-h-[200px] border border-gray-300 rounded-lg"
      />

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Publish
      </button>
    </div>
  );
};

export default PostEditor;
