// routes/aiRoutes.js
import express from "express";
import { generateContent } from "../controllers/aiController.js";

const router = express.Router();

// POST /api/generate
router.post("/", generateContent);

export default router;
