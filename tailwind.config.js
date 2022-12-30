/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        marck: ['Marck Script', 'cursive'],
        ruslan: ['Ruslan Display','cursive']
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      boxShadow: {
        leftPage: '-45px 0px 30px -6px rgba(0, 0, 0, 0.2) inset;',
        rightPage: '45px 0px 30px -6px rgba(0, 0, 0, 0.2) inset;',
      },
    },
  },
  plugins: [],
};
