/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // <- muy importante
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7b2cbf",  // morado
        accent: "#4ade80",   // verde
        dark: "#0f0f1c",
        card: "#1b1b2f",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};