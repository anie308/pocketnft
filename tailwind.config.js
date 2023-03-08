/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#140C1F'
      },
      fontFamily:{
        'oxanium': ['Oxanium', 'cursive'] 
      }
    },
  },
  plugins: [],
}
