/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'mwinda-green': '#10b981',
        'mwinda-dark-green': '#047857',
        'mwinda-orange': '#f97316',
        'mwinda-dark-orange': '#c2410c',
      },
    },
  },
  plugins: [],
}
