/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-berry', 'bg-sea', 'bg-lavender',
    'bg-sky', 'bg-water', 'bg-cloudy',
    'bg-storm', 'bg-gold', 'bg-pine', 'bg-moss'
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: 'Ubuntu'
      },
      colors: {
        bark: '#1C1E1D',
        gold: '#D2A04A',
        lavender: '#96B2E1',
        water: '#f0f0fc',
        berry: '#8a76a6',
        sky: '#5FA8BA',
        sea: '#6A9CB5',
        cloudy: '#748FB0',
        storm: '#7F83AB'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'wiggle': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}
