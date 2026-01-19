/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: "480px",
        tablet: "820px",
        tabletLg: "1024px",
        laptop: "1280px",
        desktop: "1440px",
        wide: "1680px",
        ultra: "1920px",
        mega: "2560px",
      },
    },
  },
  plugins: [],
};
