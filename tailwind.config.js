/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': { 'max': '380px' }, // Custom breakpoint for screens <= 310px
        'ms' : {'max': '767px'},
        'msb' : {'max': '1023px'},
      },
    },
    fontFamily:{
      family: ["Montserrat"],
      signature: ["Great Vibes"],
      title:["New Amsterdam"]
    },
  },
  plugins: [],
}


