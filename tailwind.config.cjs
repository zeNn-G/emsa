/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        purpleAccent: "#a893d6",
      },
      fontFamily: {
        sans: ['"Playfair Display"', "serif"],
        sans: ["'Exo '", "sans-serif"],
        sans: ["'Roboto'", "sans-serif"],
      },
    },
    screens: {
      sm: "432px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
