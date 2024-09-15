/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'path-image': "url('../assets/Top_Path.png')",
      },
    },
  },
  plugins: [],
}