/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-main': "url('../../public/images/hero1.jpg')"
      },
    },
    screens:{
      'phone': '400px'
    }
  },
  plugins: [],
}
