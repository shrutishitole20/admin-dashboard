/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#64748b",
        sidebar: "#1f2937",
        surface: "#ffffff",
        darksurface: "#1e293b",
      },
      boxShadow: {
        dashboard: "0 4px 20px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};