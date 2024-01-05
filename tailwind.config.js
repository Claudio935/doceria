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
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out'
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
