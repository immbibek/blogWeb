import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY;

export const generateContent = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  try {
    const response = await fetch("https://api.together.xyz/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${TOGETHER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/Mistral-7B-Instruct-v0.1",
        messages: [
          {
            role: "user",
            content: `Write a blog post in markdown format about: ${title}. Include sections, bullet points, and examples.`,
          },
        ],
      }),
    });

    const data = await response.json();
    const content = data.choices[0]?.message?.content || "No content generated.";
    res.status(200).json({ content });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Content generation failed." });
  }
};
