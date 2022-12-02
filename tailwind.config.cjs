/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030413",
        secondary: "#E7C549",
        third: "#0C062E",
        white: "#EAEDFF",
        border: "#5656562e",
      },
      fontFamily: {
        logo: ["Kelly Slab", "cursive"],
      },
      dropShadow: {
        logoShadow: "0px 0px 5px rgba(0, 0, 0, 0.6)",
        "block-shadow": "0px 0px 5px #FFC800",
      },
      backgroundImage: {
        "background-image": "url('./assets/background-image.svg')",
      },
      borderColor: {
        "border-color-primary": "#FFEA9F",
      },
    },
  },
  plugins: [],
};
