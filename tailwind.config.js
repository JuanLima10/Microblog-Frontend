/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/blur-background.png)'
      },

      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      
      colors: {
        blue: {
          500: '#3F72AF',
          900: '#112D4E',
        },
        white: {
          100: '#ffffff',
          200: '#F9F7F7',
          300: '#DBE2EF',
        }
      },
    },
  },
  plugins: [],
}
