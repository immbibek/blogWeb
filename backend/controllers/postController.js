import Post from "../models/Post.js";

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
