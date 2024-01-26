/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('/src/MUAITHAIGER.png')",
        'header-bg': "url('/src/muathaibg.jpg')",
      },
      animation:{
        swap:'swap 25s linear infinite',
        marquee:'marquee 20s linear infinite',

      },
      keyframes:{
        swap:{
          '0%, 50%': {left: '0%'},
          '50.01%, 100%':{left: '100%'},
        },
        marquee:{
          '0%':{transform: 'translateX(0)'},
          '100%':{transform: 'translateX(-100%)'}
        }
      },
    },
  },
  plugins: [],
}