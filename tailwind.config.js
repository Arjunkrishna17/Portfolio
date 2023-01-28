/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        lobster: "Lobster",
      },
      colors: {
        body: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
