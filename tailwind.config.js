/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        leftPage: '-45px 0px 30px -6px rgba(0, 0, 0, 0.2) inset;',
        rightPage: '45px 0px 30px -6px rgba(0, 0, 0, 0.2) inset;',
      },
    },
  },
  plugins: [],
};
