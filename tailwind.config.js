/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#4963F5',
        fire: '#ED843E',
        water: '#5990BF',
        normal: '#A5ACAE',
        fight: '#C76D36',
        posion: '#B181C5',
        ground: '#A6974F',
        rock: '#F0DC5E',
        bug: '#7B9E4D',
        ghost: '#77639F',
        steel: '#A3B6B8',
        grass: '#A5CA62',
        electric: '#EAD657',

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

