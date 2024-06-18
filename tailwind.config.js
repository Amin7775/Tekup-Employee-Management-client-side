/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "customText-afacad": '"Afacad", sans-serif', 
      },
      colors:{
        // for custom colors
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

