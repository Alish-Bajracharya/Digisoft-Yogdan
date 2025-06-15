/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      'fade-in-up': 'fadeInUp 0.6s ease-out',
    },
    keyframes: {
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
  fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
    },
    boxShadow: {
      card: '0 4px 20px rgba(0, 0, 0, 0.08)',
    },
  },
  plugins: [],
  
},

};
