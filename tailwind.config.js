// tailwind.config.js
module.exports = {
  // purge: [],
  // 3.0 用content 2.0 用purge
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}