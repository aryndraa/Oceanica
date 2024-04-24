/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "tentang.html",
    "materi1.html",
    "materi2.html",
    "materi3.html",
    "contact.html",
  ],
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
