import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    try {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme === "dark";
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (error) {
      return false; // Default to light theme
    }
  };

  const [isDark, setIsDark] = useState(getInitialTheme());

  // Apply theme to body
  useEffect(() => {
    // Update localStorage
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }

    // Update DOM
    if (isDark) {
      document.body.style.backgroundColor = "#1B1B1B";
      document.body.style.color = "#FFFFFF";
    } else {
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#000000";
    }
  }, [isDark]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
