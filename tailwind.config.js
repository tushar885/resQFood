/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Paytone: ["Paytone One", "sans-serif"],
      },
      backgroundImage: {
        "bg-image": "url('./assests/images/bg_img.png')",
      },
    },
  },
  plugins: [],
};
