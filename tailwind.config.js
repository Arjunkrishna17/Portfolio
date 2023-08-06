/** @type {import('tailwindcss').Config} */

const color = require("./src/Config/Color.js");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["to-to", "from-from"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        lobster: "Lobster",
      },
      colors: { ...color },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
