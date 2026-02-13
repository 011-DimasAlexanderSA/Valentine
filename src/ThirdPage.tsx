import React, { useState } from "react";

export default function ThirdPage(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const valentineQuotes = [
    "You're my favorite hello and my hardest goodbye.",
    "In your eyes, I found my home.",
    "Every moment with you is my favorite moment.",
    "You make my heart skip a beat.",
    "Forever starts today with you.",
  ];

  const randomQuote = valentineQuotes[Math.floor(Math.random() * valentineQuotes.length)];

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center">
      {/* Animate hearts floating up */}
      {isOpen &&
        Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: "50%",
              animation: `float-up ${3 + Math.random() * 2}s ease-in forwards`,
              animationDelay: `${i * 0.15}s`,
            }}
          >
            ❤️
          </div>
        ))}

      {/* Letter/Note when opened */}
      {isOpen && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-amber-50 p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 pointer-events-auto animate-pulse">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-pink-600 mb-6">💌 For You</h2>
              <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                "{randomQuote}"
              </p>
              <p className="text-pink-500 font-semibold">With Love ❤️</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Envelope */}
      <div
        onClick={() => setIsOpen(true)}
        className={`relative w-80 h-48 bg-red-100 rounded cursor-pointer transform transition-all duration-500 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        style={{
          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        }}
      >
        {/* Envelope body */}
        <div className="w-full h-full flex items-center justify-center relative">
          {/* Envelope flap (top triangle closed) */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: "polygon(0 0, 50% 40%, 100% 0, 100% 100%, 0 100%)",
              background: "linear-gradient(135deg, #ff6b9d 0%, #ff8ab6 100%)",
              transition: "transform 0.5s ease",
              transform: isOpen ? "rotateX(90deg)" : "rotateX(0deg)",
            }}
          >
            <span className="text-4xl">💌</span>
          </div>

          {/* Border/outline effect */}
          <svg
            viewBox="0 0 320 192"
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none" }}
          >
            <rect
              x="10"
              y="10"
              width="300"
              height="172"
              fill="none"
              stroke="#ff5c9e"
              strokeWidth="2"
            />
            <line x1="10" y1="10" x2="160" y2="86" stroke="#ff5c9e" strokeWidth="1" />
            <line x1="310" y1="10" x2="160" y2="86" stroke="#ff5c9e" strokeWidth="1" />
          </svg>

          {/* Text hint */}
          {!isOpen && (
            <p className="text-pink-600 font-semibold text-center relative z-10">
              Click to open 💕
            </p>
          )}
        </div>
      </div>
    </div>
  );
}