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
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

