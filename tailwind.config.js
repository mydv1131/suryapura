/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          500: '#FF9933',
          600: '#E68A2E',
        },
        indiaGreen: {
          500: '#138808',
          600: '#0F6B06',
        },
        navy: {
          800: '#000080',
        }
      }
    },
  },
  plugins: [],
}
