/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'base': '92.5rem'
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      fontSize: {
        display: ['2rem', '1'],
      },
      backgroundImage: {
        'hero-img': "url('../images/bg-hero.png')"
      },
      colors: {
        'secondary': '#C968CB',
        brand: {
          gray: {
            600: '#464646'
          },
          green: {
            400: '#676E74',
            500: '#464646'
          },
          blue: {
            400: '#704DC2',
            500: '#7C68CB',
            600: '#8369CC'
          }
        }
      },
      borderRadius: {
        'large': '22px'
      }
    },
  },
  plugins: [],
}

