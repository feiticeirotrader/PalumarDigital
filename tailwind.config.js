/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Ocean Blue — replaces the old dark navy throughout the UI */
        navy: {
          DEFAULT: '#1565C0',
          50:  '#E3F1FD',
          100: '#BAD9FA',
          200: '#8DC0F6',
          300: '#5EA6F0',
          400: '#3A91E8',
          500: '#1E7DD4',
          600: '#1565C0',
          700: '#0E4D98',
          800: '#093872',
          900: '#05244C',
        },
        water: {
          DEFAULT: '#AEE8F7',
          50:  '#EAF9FE',
          100: '#C8EFFC',
          200: '#AEE8F7',
          300: '#7BD4F0',
          400: '#41BAE6',
          500: '#29B6F6',
          600: '#0DA2DA',
          700: '#0A81AE',
          800: '#065F82',
          900: '#033D56',
        },
        sand: {
          DEFAULT: '#F7F2E8',
          50:  '#FDFCF8',
          100: '#F7F2E8',
          200: '#EDE3CF',
          300: '#E0D3B7',
          400: '#CFBE9A',
        },
        gold: {
          DEFAULT: '#C8A96A',
          400: '#D6BC85',
          500: '#C8A96A',
          600: '#B8975A',
        },
      },
      fontFamily: {
        sans:    ['Inter',           'system-ui', 'sans-serif'],
        display: ['Poppins',         'system-ui', 'sans-serif'],
        script:  ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        soft:    '0 1px 6px -1px rgba(21,101,192,0.08), 0 1px 3px rgba(21,101,192,0.05)',
        'soft-lg':'0 6px 22px -4px rgba(21,101,192,0.13), 0 2px 6px rgba(21,101,192,0.06)',
        card:    '0 1px 4px rgba(21,101,192,0.07), 0 4px 14px -4px rgba(21,101,192,0.09)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.65s ease-out both',
        'fade-in': 'fade-in 0.50s ease-out both',
      },
    },
  },
  plugins: [],
};
