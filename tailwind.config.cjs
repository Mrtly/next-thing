/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-blue-700',
    'bg-purple-700',
    'bg-pink-700'
  ],
  theme: {
    extend: {
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
