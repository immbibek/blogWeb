// controllers/aiController.js
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;

// Choose a lightweight model like gpt2 or something more powerful if needed
const HF_MODEL_URL = "https://api-inference.huggingface.co/models/gpt2";

export const generateContent = async (req, res) => {
  const { title } = req.body;

  if (!title) return res.status(400).json({ error: "Title is required" });

  const prompt = `Write a blog post in markdown format about: ${title}. Include sections, bullet points, and examples.`;

  try {
    const hfResponse = await fetch(HF_MODEL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    const data = await hfResponse.json();

    if (data.error) {
      return res.status(500).json({ error: "Hugging Face error: " + data.error });
    }

    const content = data[0]?.generated_text || "No content generated.";
    res.status(200).json({ content });
  } catch (err) {
    console.error("Hugging Face API error:", err.message);
    res.status(500).json({ error: "Content generation failed." });
  }
};
