/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        estedad: ['Estedad', 'sans-serif'],
      },
      colors:{
      'bg-body' : "#F5F5F5",
      "dark-green" :"#2BAE66",
      "text-gray" : "#737373",
      "color-text" : "#404040"
      },
      	screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1300px'
    },
    lineHeight: {
      '11': '48px', // Custom line-height
    },
  },
  
  },
  plugins: [],
}
