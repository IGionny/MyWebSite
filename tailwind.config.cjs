/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#303230",
          2: "#3C3E3B",
          3: "#272B28",
          4: "#717371",
          5: "#EDEDED",
        },
        orange : {
          1: "#FF9100"
        },
        red :{
          1: "#FE5F57"
        },
        yellow: {
          1 : "#FDBC2C"
        },
        green: {
          1: "#2BC840"
        }
        
      }
    },
  },
  plugins: [],
}
