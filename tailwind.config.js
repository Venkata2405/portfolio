/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'hero-font': ['Sriracha', 'cursive'],
      'para-font': ['Inter', 'sans-serif'],
      'hand-font': ['Patrick Hand', 'cursive'],
      'lk-font': ['Courgette', 'cursive'],
    }
  },
  plugins: [
    require("tailwindcss-motion")
  ],
}