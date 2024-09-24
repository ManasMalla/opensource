"use client";
import { useState, useEffect, useRef } from "react";
export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const currentLanguageFullName =
    currentLanguage === "en"
      ? "English"
      : currentLanguage === "hi"
      ? "हिन्दी"
      : "తెలుగు";
  const linksRef = useRef([]);
  const languageMenuRef = useRef(null);

  // Handler to toggle the menu open/closed
  const handleToggle = () => {
    setOpen(!open);
  };

  // Set the current language based on stored language or default to 'en'
  useEffect(() => {
    const storedLanguage = localStorage.getItem("django_language") || "en";
    setCurrentLanguage(storedLanguage);
  }, []);

  // Handle language selection
  const handleLanguageChange = (lang: any) => {
    setCurrentLanguage(lang);
    localStorage.setItem("django_language", lang);
    setOpen(false);
    // Handle URL changes or page reloads if needed
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      //   if (
      //     languageMenuRef.current &&
      //     !languageMenuRef.current.contains(event.target)
      //   ) {
      //     setOpen(false);
      //   }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageMenuRef]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="language justify-end flex flex-col">
      <button
        type="button"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleToggle}
        className="w-32"
      >
        <span className="material-symbols-rounded mr-3">globe</span>
        <span className="text-sm">{currentLanguageFullName}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 15l-5-5h10Z" />
        </svg>
      </button>

      {open && (
        <div
          id="language-menu"
          className="shadow-lg p-4 rounded-md [&_li]:py-2 [&_li]:cursor-pointer"
          role="menu"
          ref={languageMenuRef}
        >
          <ul>
            <li onClick={() => handleLanguageChange("en")} role="menuitem">
              English
            </li>
            <li onClick={() => handleLanguageChange("hi")} role="menuitem">
              Hindi
            </li>
            <li onClick={() => handleLanguageChange("te")} role="menuitem">
              Telugu
            </li>
            {/* Add more languages as needed */}
          </ul>
        </div>
      )}
    </div>
  );
}
