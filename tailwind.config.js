/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hanken: ['"Hanken Grotesk"', 'sans-serif'],
      },
      colors:{
        'java': {
    '50': '#F0FCFC', 
    '100': '#DFF7F7', 
    '200': '#B4EDEB', 
    '300': '#8AE3E0', 
    '400': '#42CFC8', 
    '500': '#06BAB2', 
    '600': '#05A898', 
    '700': '#038C75', 
    '800': '#027057', 
    '900': '#01543A', 
    '950': '#013621'
},
      }
    },
  },
  plugins: [],
}