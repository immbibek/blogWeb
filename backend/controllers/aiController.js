// controllers/aiController.js
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateContent = async (req, res) => {
  const { title } = req.body;

  if (!title) return res.status(400).json({ error: "Title is required" });

  try {
    const prompt = `Write a blog post about "${title}" in markdown format. Include sections, lists, and examples if applicable.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;
    res.status(200).json({ content });
  } catch (err) {
    console.error("OpenAI error:", err.message);
    res.status(500).json({ error: "AI generation failed" });
  }
};
