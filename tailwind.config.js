/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#F8F2E8',
        beige: '#EBDDCB',
        clay: '#C79E84',
        mocha: '#6B4F3C',
        blush: '#E7CFC7',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(107, 79, 60, 0.08)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
