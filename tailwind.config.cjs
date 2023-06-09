/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glow: "0 0 10px #0ef",
        glow_lg: "0 0 20px #0ef",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        "slideLeft": {
          "0%": {
            transform: "translateX(100px)",
            opacity: 0
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1
          }
        },      
        "slideTop": {
          "0%": {
            transform: "translateY(100px)",
            opacity: 0
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1
          }
        },     
        "slideBottom": {
          "0%": {
            transform: "translateY(-100px)",
            opacity: 0
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1
          }
        }
      },
      animation: {
        "slideRight-animation": "slideRight 1.1s ease forwards",
        "slideLeft-animation": "slideLeft 1.1s ease forwards",
        "slideTop-animation": "slideTop 1.1s ease forwards",
        "slideBottom-animation": "slideBottom 1.1s ease forwards",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true }),],
};
