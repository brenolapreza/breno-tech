/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030413",
        secondary: "#E7C549",
        third: "#121212",
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
        "background-main-home": "url('./assets/backgroun-main-home.jpg')",
        "background-secoudary-home":
          "url('./assets/background-secoudary-home.jpg')",
        "background-thirdy-home": "url('./assets/background-thirdy-home.jpg')",
      },
      borderColor: {
        "border-color-primary": "#FFEA9F",
      },
    },
  },
  plugins: [],
};
