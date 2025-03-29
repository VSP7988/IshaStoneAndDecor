/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#6B3410'
        }
      }
    },
  },
  plugins: [],
};