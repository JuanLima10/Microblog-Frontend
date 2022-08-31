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
          500: '#1BA2EF',  
        },
        green: {
          500: '#28353E',
          800: '#1B2730',
          900: '#05141C',
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
