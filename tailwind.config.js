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
          DEFAULT: 'rgba(157,77,42,255)',
          light: 'rgba(177,97,62,255)',
          dark: 'rgba(137,57,22,255)'
        }
      }
    },
  },
  plugins: [],
};
