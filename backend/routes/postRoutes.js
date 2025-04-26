
import express from "express";
import { createPost, getPosts, getSingle} from "../controllers/postController.js";

const router = express.Router();

router.post("/", createPost);   // POST /api/posts
router.get("/", getPosts);      // GET /api/posts
router.get("/:id",getSingle)
export default router;