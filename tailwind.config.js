/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        '41': '41%',
      },
      margin: {
        '-0.5em': '-0.5em',
      },
      backgroundPosition: {
        'x-100': '100%',
      },
    },
  },
  plugins: [],
}

