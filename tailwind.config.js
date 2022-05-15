module.exports = {
  content: [
    "./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: '2rem',
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
  plugins: [require("@tailwindcss/aspect-ratio")],
}