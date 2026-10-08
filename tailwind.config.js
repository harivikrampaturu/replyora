/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0f766e', light: '#2dd4bf', dark: '#115e59' },
        secondary: { DEFAULT: '#475569', light: '#94a3b8', dark: '#334155' },
        surface: {
          DEFAULT: '#f8fafc',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
        },
        ink: { DEFAULT: '#0f172a', soft: '#334155', muted: '#64748b' },
      },
      fontFamily: {
        display: ['Lexend', 'system-ui', 'sans-serif'],
        sans: ['Noto Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 28px rgba(0,0,0,0.12)',
        'card-hover': '0 12px 36px rgba(0,0,0,0.16)',
        glow: '0 0 24px #0f766e55',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-page': 'slidePage 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slidePage: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
