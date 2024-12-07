/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryOrgange:"#FFC446",
        secondaryOrgange:"#C18606",
        thirdOrgange:"#FFEECA",
        gray:"#918E8E",
      }
    },
  },
  plugins: [],
};