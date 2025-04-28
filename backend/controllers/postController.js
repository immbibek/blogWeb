import Post from "../models/Post.js";
import mongoose from "mongoose";
// Create new post
export const createPost = async (req, res) => {
  try {
    const { title, category, image, date, content } = req.body;
    const post = new Post({ title, category, image, date, content });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post", message: err.message });
  }
};

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export const getSingle = async (req, res) => {
  try {
    const id = req.params.id;

    // Check if the provided id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid post ID" });
    }

    const singlePost = await Post.findById(id);

    // If no post is found, return an error response
    if (!singlePost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json({ success: true, post: singlePost });
  } catch (error) {
    
    res.status(500).json({ error: "Failed to fetch the post", message: error.message });
  }
};

