/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          black: '#0a0a0a',
          950: '#0d0d0d',
          900: '#121212',
          850: '#161616',
          800: '#1b1b1b',
          700: '#242424',
          600: '#2e2e2e',
          500: '#3a3a3a',
          400: '#5c5c5c',
          300: '#8a8a8a',
          200: '#b5b5b5',
          100: '#dcdcdc',
        },
        accent: {
          DEFAULT: '#39FF6E',
          50: '#eafff0',
          100: '#c9ffda',
          200: '#97ffb8',
          300: '#5cff92',
          400: '#39FF6E',
          500: '#22e05a',
          600: '#15b347',
          700: '#128a39',
          800: '#126b30',
          900: '#10572a',
        },
        danger: '#ff4d4f',
        warning: '#ffb020',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(57,255,110,0.15), 0 0 24px -4px rgba(57,255,110,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -8px rgba(0,0,0,0.6)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        pulseRing: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
      },
      animation: {
        fadeIn: 'fadeIn 0.25s ease-out',
        slideUp: 'slideUp 0.3s ease-out',
        pulseRing: 'pulseRing 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
