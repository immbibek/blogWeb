import React,{createContext,useContext} from "react";

const postData = [
    {
      id: 1,
      title: "Mindfulness and Meditation Techniques for Developers",
      category: "Productivity",
      date: "April 6, 2025",
      image: "/p1.jpg",
    },
    {
      id: 2,
      title: "Writing Clean & Maintainable Code: Best Practices",
      category: "Code Quality",
      date: "April 10, 2025",
      image: "/p2.jpg",
    },
  ];

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  return (
    <PostContext.Provider value={{ posts: postData }}>
      {children}
    </PostContext.Provider>
  );
};

// Custom hook
export const usePosts = () => useContext(PostContext);