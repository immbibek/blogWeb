
import express from "express";
import { createPost, getPosts } from "../controllers/postController.js";

const router = express.Router();

router.post("/", createPost);   // POST /api/posts
router.get("/", getPosts);      // GET /api/posts

export default router;
