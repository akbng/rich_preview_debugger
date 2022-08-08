/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0.2rem 0.8rem 1.6rem 0 #a21caf",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
