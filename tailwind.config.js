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
        "custom_primary_color" : "#0119ff" ,
        "custom_Dark" : "#282930",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

