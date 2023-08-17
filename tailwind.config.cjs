/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-wood', 'bg-apple', 'bg-lavender', 'bg-walnut',
    'bg-leaf', 'bg-water', 'bg-maple',
    'bg-bark', 'bg-gold', 'bg-pine', 'bg-moss'
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: 'Ubuntu'
      },
      colors: {
        bark: '#1C1E1D',
        walnut: '#540804',
        wood: '#81171b',
        maple: '#ad2e24',
        apple: '#c75146',
        leaf: '#ce796b',
        gold: '#D2A04A',
        ground: '#EFEBE7',
        lavender: '#96B2E1'
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
