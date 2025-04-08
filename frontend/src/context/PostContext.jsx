import React, { createContext, useState } from "react";

// 1. Create the Context
export const PostContext = createContext();

// 2. Create the Provider Component
export const PostProvider = ({ children }) => {
  const [posts] = useState([
    {
      id: "1",
      title: "Mindfulness and Meditation Techniques for Developers",
      category: "Productivity",
      image: "/p1.jpg",
      date: "April 6, 2025",
      content: `Mindfulness helps you reduce stress and stay focused. Start with just 5 minutes of meditation daily. 
      Try apps like Headspace or Insight Timer. You’ll be surprised at how much clarity it can bring to your code!`,
    },
    {
      id: "2",
      title: "Writing Clean & Maintainable Code",
      category: "Code Quality",
      image: "/p2.jpg",
      date: "April 10, 2025",
      content: `Clean code is not just about indentation. Use meaningful variable names, break functions into smaller units, 
      and avoid repetition. It’s all about writing code your future self (and your team) will thank you for.`,
    },
    {
      id: "3",
      title: "The Power of JavaScript Frameworks: Angular vs. React vs. Vue",
      category: "JavaScript",
      image: "/feature.jpg",
      date: "April 15, 2025",
      content: `Each framework has its strengths. React offers flexibility, Angular is feature-packed and enterprise-ready, 
      and Vue is beginner-friendly. Choose one based on project scale, team skillset, and ecosystem.`,
    },
    {
      id: "4",
      title: "Automating Repetitive Tasks: Productivity Hacks for Developers",
      category: "Productivity",
      image: "/f2.jpg",
      date: "April 5, 2025",
      content: `Use tools like Git hooks, linters, and task runners (like Gulp or npm scripts) to automate boring stuff. 
      Spend your time solving real problems instead!`,
    },
    {
      id: "5",
      title: "Best Practices for Writing Clean and Maintainable Code",
      category: "Code Quality",
      image: "/f3.jpg",
      date: "May 8, 2024",
      content: `Avoid long files, nested conditionals, and magic numbers. Follow conventions. Document where necessary. 
      Refactor regularly and review with peers.`,
    },
  ]);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};
