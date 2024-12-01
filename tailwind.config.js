/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        iconBackground: 'rgb(51, 61, 82)',
        componyColor: 'rgb(251, 19, 81)',
        componyActiveColor: 'rgb(241, 52, 100)',
        background: '#363636',
        footerBackground: "#1f232d",
        submitBackground: "rgb(8, 75, 153)",
        highRating: "#26ff2d",
        averageRating: "#ffe21d",
        lowRating: "#ff3838"
      },
      screens: {
        filmItemMedia: "1440px",
        aboutMedia: "1360px",
        contactUsMedia: "1300px",
        filmInfo: "718px",
        headerMedia: "600px",
        cardsMediaTablet: "680px",
        cardsMediaPhone: "679px"
      },
      keyframes: {
         rotation: {
           '0%': { transform: 'rotate(0deg)' }, 
           '100%': { transform: 'rotate(360deg)' }, 
          }, }, 
          animation: {
             rotation: 'rotation 1s linear infinite', 
          },
    },
  },
  plugins: [],
}

