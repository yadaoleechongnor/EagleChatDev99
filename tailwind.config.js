/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx }"
  ],
  theme: {
    extend: {
      colors:{
        "blue-dark": "#008BCB",
        "blue-light":"#0DB5E8",
       
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lao:["Noto Sans Lao Looped', sans-serif"]
      },
    },
  },
  screens: {
   
    sm: "490px",
    md: "760px",
    lg: "1024px",
    xl: "1280px",
  },
  plugins: [require("daisyui")],
}

