"use client";

import { useState } from "react";
import { useCursorTheme, cursorThemes } from "./cursor-config";

export default function CursorThemeSwitcher() {
  const { setCursorTheme, themes } = useCursorTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] =
    useState<keyof typeof cursorThemes>("default");

  const handleThemeChange = (themeName: keyof typeof cursorThemes) => {
    setCursorTheme(themeName);
    setCurrentTheme(themeName);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-lg px-4 py-2 text-white text-sm font-medium hover:bg-gray-700/80 transition-all duration-200 flex items-center gap-2"
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
          Cursor: {currentTheme}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 rounded-lg overflow-hidden min-w-[200px] shadow-xl">
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => handleThemeChange(theme)}
                className={`cursor-pointer w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-700/80 transition-colors duration-150 flex items-center justify-between ${
                  currentTheme === theme ? "bg-gray-700/60" : ""
                }`}
              >
                <span className="capitalize">{theme}</span>
                <div
                  className={`w-3 h-3 rounded-full ${getThemeColor(theme)}`}
                ></div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function getThemeColor(theme: keyof typeof cursorThemes): string {
  const colorMap = {
    default: "bg-gradient-to-r from-blue-400 to-purple-500",
    neon: "bg-gradient-to-r from-green-400 to-cyan-400",
    fire: "bg-gradient-to-r from-orange-500 to-yellow-400",
    ice: "bg-gradient-to-r from-blue-300 to-white",
    matrix: "bg-gradient-to-r from-green-400 to-green-600",
  };

  return colorMap[theme] || colorMap.default;
}
