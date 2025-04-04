import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.body.style.backgroundColor = isDark ? "#1B1B1B" : "#FFFFFF";
    document.body.style.color = isDark ? "#FFFFFF" : "#000000";
  }, [isDark]);

  return (
    <header className="p-4 px-5 sm:px-10 flex justify-between items-center relative">
      {/* LOGO */}
      <div>
        <a
          href="/"
          className="logo flex items-center text-dark dark:text-light gap-2 ml-7"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-dark dark:border-gray-500 flex justify-center items-center">
            <img
              src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-8-2-1024.png"
              alt="logo"
              className="w-[90%] h-[90%] object-contain"
            />
          </div>
          <span className="font-bold text-base md:text-lg">CodeBucks</span>
        </a>
      </div>

      {/* MOBILE NAV */}
      <div className="sm:hidden flex-1 flex justify-center">
        {isOpen && (
          <nav className="absolute left-1/2 transform -translate-x-1/2 top-16 sm:hidden flex justify-around items-center py-2 px-6 border border-dark rounded-full font-medium capitalize bg-[#D1D1D1] backdrop-blur-sm z-40 h-10 w-72 shadow-md text-sm transition-all duration-300">
            <a href="/" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="/write" onClick={() => setIsOpen(false)}>
              Write
            </a>
            <a href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <button onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
        )}
      </div>

      {/* HAMBURGER ICON */}
      <div className="sm:hidden ml-2 z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden sm:flex justify-around py-2 px-6 border border-dark rounded-full font-medium capitalize items-center fixed top-6 right-1/2 translate-x-1/2 bg-[#D1D1D1] backdrop-blur-sm z-50 h-10 w-72">
        <a href="/">Home</a>
        <a href="/write">write</a>
        <a href="/contact">Contact</a>
        <button onClick={() => setIsDark(!isDark)}>
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* SOCIAL */}
      <div className="hidden sm:flex gap-4 items-center sm:mr-7">
        <a
          href="https://linkedin.com"
          className="p-2 rounded-md  "
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.25 8.74H4.8V24H.25V8.74zM8.75 8.74H13V10.5h.1c.6-1.1 2.05-2.25 4.25-2.25 4.5 0 5.35 2.95 5.35 6.8V24H18V15.55c0-2-.05-4.55-2.8-4.55-2.8 0-3.25 2.2-3.25 4.4V24H8.75V8.74z" />
          </svg>
        </a>
        <a
          href="https://github.com/immbibek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.284 3.438 9.766 8.205 11.357.6.111.82-.261.82-.577v-2.03c-3.338.726-4.033-1.607-4.033-1.607-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.838 1.253 1.838 1.253 1.07 1.848 2.809 1.314 3.495 1.005.108-.775.418-1.315.76-1.617-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.465-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.49 11.49 0 0 1 3.004-.404c1.02.004 2.047.138 3.004.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.624-5.48 5.921.43.372.814 1.102.814 2.222v3.293c0 .319.216.694.825.576C20.565 22.262 24 17.784 24 12.5 24 5.873 18.627.5 12 .5z" />
          </svg>
        </a>
        <a
          href="https://dribbble.com"
          className="p-2 rounded-md "
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.035 3.134 9.324 7.522 11.053a11.978 11.978 0 0 1 1.566-5.361c-1.356-.293-2.488-.962-3.364-1.942C3.866 15.445 3 13.812 3 12c0-1.126.215-2.206.604-3.195a11.987 11.987 0 0 1 6.185-6.186A8.971 8.971 0 0 1 12 3c1.812 0 3.445.866 4.445 2.324.98.876 1.65 2.008 1.943 3.364a11.975 11.975 0 0 1-5.361 1.566c1.093 2.446 2.706 4.632 4.718 6.444C20.866 15.867 21 14.948 21 14c0-4.962-4.037-9-9-9S3 9.038 3 14c0 4.963 4.038 9 9 9s9-4.037 9-9c0-.948-.134-1.867-.39-2.723-1.812 2.012-3.998 3.625-6.444 4.718a11.975 11.975 0 0 1 1.566-5.361A8.97 8.97 0 0 1 12 3a8.97 8.97 0 0 1-2.805.434A11.986 11.986 0 0 1 12 0z" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
