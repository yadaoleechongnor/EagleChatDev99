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
        "icon-bg": "#D2D5D9",
        "background-color": "#F4F7FC",
        "btn-green":" #00B488",
        "bonus-color": "#FFD3E2",
        "hist-color": "#FCD5FF",
        "order-color": "#FEE4CB",
        "addmember-color": "#E9E7FD",
        "product-color": "#FEE4CB",
        "traval-color": "#E9E7FD, #D5D2F8",
        "waitforclose-color": "#D3F5FE",
        "transaction-his-color": "#C8F7DC",
        "team-color": "#D3F5FE",
        "productpay-menu-color": "#D3D3D3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lao:["Noto Sans Lao Looped', sans-serif"]
      },
    },
  },
  screens: {
    sml:"390px",
    sm: "490px",
    md: "760px",
    lg: "1024px",
    xl: "1280px",
  },
  plugins: [require("daisyui")],
}

