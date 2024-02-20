/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
"./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },

    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd'
        },
        grey: '#A5BFCB',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }, 
      
      fontFamily: {
        primary: 'Poppins',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 2px 40px 0px rgba(8, 73, 81, 0.06)',
        custom3: '0px 4.44px 4.44px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        services: 'url(../../assets/img/services/bg.svg)',
        testimonials: 'url(../../assets/bg-testimoni.png)',
        departements: 'url(../../assets/img/departments/bg.svg)',
        quoteLeft: 'url(../../assets/icons/testimonials/quote-left.svg)',
        quoteRight: 'url(../../assets/icons/testimonials/quote-right.svg)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')],
}

