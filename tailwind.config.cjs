/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030413",
        secondary: "#E7C549",
        third: "#4831D4",
        white: "#EAEDFF",
        border: "#5656562e",
      },
      fontFamily: {
        logo: ["Kelly Slab", "cursive"],
      },
      dropShadow: {
        logoShadow: "0px 0px 5px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "background-image": "url('./assets/background-image.svg')",
      },
    },
  },
  plugins: [],
};
