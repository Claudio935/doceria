/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      }
    },
    backgroundImage: {
      // eslint-disable-next-line quotes
      'pack-train': "url('../src/assets/image/fundoCoracao.png')",
    },

  },
  plugins: []
};
