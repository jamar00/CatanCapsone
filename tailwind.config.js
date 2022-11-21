/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    clipPath : {
      hex : "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
    },
    extend: {},
  },
    plugins: [
      require('tailwind-clip-path'),
    ],
}
