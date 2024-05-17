/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      alignItems: {
        'first-baseline': 'first baseline',
      },
      backgroundSize: {
        '41': '41%',
        '50': '50%',
      },
      margin: {
        '-0.5em': '-0.5em',
      },
      backgroundPosition: {
        'x-100': '100%',
        '-390px--65px': '-390px -65px',
      },
    },
  },
  plugins: [],
}