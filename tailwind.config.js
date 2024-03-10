// /** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'opensans': ['ui-sans-serif', 'system-ui', 'sans-serif', '\"Open Sans\"', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
    screens: {
      'sm': '310px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1500px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1700px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
};