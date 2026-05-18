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
        background: '#efe4d1',
        darkBrown: '#3b2b22',
        mediumBrown: '#7b6252',
        accent: '#c7a879',
        cream: '#fffaf2',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(59, 43, 34, 0.10)',
      },
    },
  },
  plugins: [],
}
