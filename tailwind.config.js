/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        carbon: {
          950: "#080808",
          900: "#0f0f0f",
          800: "#161616",
          700: "#1e1e1e",
          600: "#2a2a2a",
          500: "#3a3a3a",
        },
        acid: "#00ff88",
        volt: "#c8ff00",
        plasma: "#7c3aed",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-right": "slideRight 0.6s ease forwards",
        pulse2: "pulse2 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "blink-cursor": "blinkCursor 1s step-end infinite",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideRight: {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        pulse2: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blinkCursor: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
      },
    },
  },
  plugins: [],
};
