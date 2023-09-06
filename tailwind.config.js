// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}
