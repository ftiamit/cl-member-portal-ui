// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        // background color
        'pwa-orange': "#FF0420",
        'pwa-orange-light': "#FF5754",
        'pwa-yellow-bg-50': "#FFE6B1",
        'pwa-yellow-bg-100': "#F6C25F",
         // text color
         'pwa-gray-text-100': "#181818",
      },
      boxShadow:{
        'paw-sm': '0px 3px 10px 0px rgba(0, 0, 0, 0.25)',
        'paw-lg': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
