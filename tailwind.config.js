/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          "default": "#981F1F"
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

