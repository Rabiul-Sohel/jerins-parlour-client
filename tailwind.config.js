import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'pink': '#F63E7B',
        'hPink': '#f12d6f'
      },
      skew: {
        '20': '20deg',
      }
    },
  },
  plugins: [
    require('daisyui'),
   
  ],
  daisyui:{
      // themes: ['light']
  }
}

