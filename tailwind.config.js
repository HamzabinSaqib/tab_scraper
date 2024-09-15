/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'path-image': "url('../images/Top_Path.png')",
      },
    },
  },
  plugins: [],
}