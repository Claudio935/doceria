/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        rotateGalery: {
          '0%': {
            transform: 'perspective(1000px) rotateY(0deg)'
          },
          '100%': {
            transform: 'perspective(1000px) rotateY(360deg)'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'rotate-galery': 'rotateGalery 20s linear infinite'
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        ['dancing']: ['Dancing Script']
      }
    },
    backgroundImage: {
      // eslint-disable-next-line quotes
      'pack-train': "url('../src/assets/image/fundoCoracao.png')",
    },

  },
  plugins: []
};
