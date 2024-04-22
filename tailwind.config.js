/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        bg: "#FBF9FF",
        primary: "#BAD8FF",
        font: "#044D90",
        dark: "#000022",
      },
    },
  },
  plugins: [require("daisyui")],
};
