/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fe6091",
        secondary: "#e993b0",
        accent: "#2e73d0",
        tertiary: "#d97abf",
        highlight: "#59e4ec",
      },
    },
  },
  plugins: [],
};
