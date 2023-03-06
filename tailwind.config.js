/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['Inter', 'sans-serif'], 
      'urbanist': ['Urbanist', 'sans-serif'], 
      'arabic': ['Noto Sans Arabic', 'sans-serif'], 
      SansArabic: ["IBM Plex Sans Arabic", "sans-serif"],
   
    }
  },
  plugins: [],
}
