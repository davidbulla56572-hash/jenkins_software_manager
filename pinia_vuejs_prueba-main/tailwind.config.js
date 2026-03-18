/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*.html",
    "./src/*.{vue,js}",
    "./src/**/*.{vue,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

