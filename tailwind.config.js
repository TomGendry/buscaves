/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#f1f2f6',
        subMain: '#2ecc71',
        dry: '#ecf0f1',
        text: '#2c3e50',
        star: '#FFB000',
        border: '#4b5563'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
