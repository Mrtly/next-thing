/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-water",
    "bg-bark",
    "bg-yin",
    "bg-violet",
    "bg-rose",
    "bg-coral",
    "bg-vinegar",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        bark: "#1C1E1D",
        gold: "#D2A04A",
        lavender: "#96B2E1",
        yin: "#355070",
        violet: "#6d597a",
        rose: "#b56576",
        coral: "#e56b6f",
        vinegar: "#dda15e",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        wiggle: "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
