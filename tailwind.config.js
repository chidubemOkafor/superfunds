/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    aspectRatio: {
      '4/3': '4 / 3',
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
