/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

