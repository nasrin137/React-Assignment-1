/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#F26922",
        secondary:"#E4E4E780",
        accent:"#A1A1AA",
        gray:"#E4E4E780",
        ash:"#71717A",
        dark:"#09090B"
      },
    },
  },
  plugins: [],
}

