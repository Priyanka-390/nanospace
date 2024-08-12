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
        "light-grey": "#887F7C",
        "sky-blue": "#5893FF",
        "light-blue":"#2253F5",
        "light-black": "#111111",
        "dark-grey": "#3E3E3F",
        "light-white":"#CCCCCC"
      },
      backgroundImage: {
        "hero": "url(./assets/images/webp/hero-bg.webp)",
        "explore-gradient": "linear-gradient(180deg, rgba(17, 17, 17, 0) 7.35%, #111111 75.74%)",
         "hero-gradient": "linear-gradient(180deg, rgba(7, 11, 27, 0) 7.35%, #111111 75.74%)"


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