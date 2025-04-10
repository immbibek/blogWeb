
import express from "express";
import { generateContent } from "../controllers/aiController.js";

const router = express.Router();
router.post("/", generateContent); // POST /api/generate

export default router;
