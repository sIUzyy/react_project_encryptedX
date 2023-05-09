/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'footer' : ['Josefin Sans', 'sans-serif'],
        'main': ['Bebas Neue', 'cursive'],
        'nav': ['Montserrat', 'sans-serif'],
        'landing': ['Josefin Sans', 'sans-serif'],
      }
    },
    
  },
  plugins: [
    
  ],
}