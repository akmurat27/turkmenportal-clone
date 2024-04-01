/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#3d3d3d',
      },
    },
  },
  variants: {},
  plugins: [],
}

