/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "orbitron": ["Orbitron\Bold", "sans-serif"],
        "saira":["Saira", "sans-serif"],
      },
      colors: {
        "light-grey": "#D9D9D9",
        "sky-blue": "#5893FF",
        "light-black": "#111111",
        "dark-grey": "#3E3E3F",
        "light-white":"#CCCCCC"
      },
      backgroundImage: {
        "hero":"url(./assets/images/webp/hero-bg.webp)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
      },
      fontSize: {
        "custom-6xl": "66px",
        "custom-4xl":"45px"
      },
      backgroundSize: {
        full:"100% 100%"
      },
      lineHeight: {
        "157": "157%",
        "150":"150%",
        "120":"120%"
      },
      boxShadow: {
        "nav": "0px 7px 10.9px 0px #0000002E",
      }
    },
  },
  plugins: [],
}