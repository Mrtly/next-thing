/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-pine', 'bg-moss', 'bg-grass', 
    'bg-matcha', 'bg-lavender', 'bg-goldleaf',
    'bg-bark'
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: 'Ubuntu'
      },
      colors: {
        pine: '#1F3A33',
        moss: '#016341',
        grass: '#07A761',
        goldleaf: '#D2A04A',
        lavender: '#96B2E1',
        matcha: '#D4E9E1',
        dull: '#EDEBE9',
        bark: '#1C1E1D',
        wine: '#800E13',
        berry: "#c1121f"
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
