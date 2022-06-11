/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "custom-orange": '#f78f1e'
      }
    },
  },
  plugins: [],
}
