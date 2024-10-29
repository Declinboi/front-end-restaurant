/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E83667",
        primaryDark: "#BB2C51",
        secondary: "#21D4B9",
        Dark: "#303030",
      },
      fontFamily: {
        inter: ["Inter", "sans-sarif"],
        cursive: ["Ephesis","serif"],
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
    },
  },
  plugins: [],
};
