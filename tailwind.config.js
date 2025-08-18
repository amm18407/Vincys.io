/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f6',
          100: '#e0f2ed',
          200: '#c1e5db',
          300: '#a2d8c9',
          400: '#83cbb7',
          500: '#448B72',
          600: '#336B56',
          700: '#2a5a47',
          800: '#224938',
          900: '#1a3829',
        },
        background: {
          light: '#FFEEDD',
          dark: '#111514',
        },
        foreground: {
          light: '#111514',
          dark: '#FFEEDD',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#111514',
        },
        accent: {
          50: '#f0f9f6',
          100: '#e0f2ed',
          200: '#c1e5db',
          300: '#a2d8c9',
          400: '#83cbb7',
          500: '#448B72',
          600: '#336B56',
          700: '#2a5a47',
          800: '#224938',
          900: '#1a3829',
        }
      },
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        satoshi: ['Satoshi', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

