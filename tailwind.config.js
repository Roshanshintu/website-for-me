/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050813',
        midnight: '#07111f',
        graphite: '#101827',
        electric: '#25b7ff',
        azure: '#1577ff',
        ice: '#e7f6ff'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif']
      },
      boxShadow: {
        neon: '0 0 32px rgba(37, 183, 255, 0.28)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'radial-blue': 'radial-gradient(circle at center, rgba(37,183,255,0.2), transparent 42%)'
      }
    }
  },
  plugins: []
};
