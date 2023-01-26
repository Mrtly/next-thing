/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
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
