/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '110': '110px',
        '620': '620px',
        '500': '500px',
      },
      colors: {
        themeColor: 'rgb(39, 61, 121)',
        themeColor1: '#e7a50b',
      },
    },
  },
  plugins: [],
}