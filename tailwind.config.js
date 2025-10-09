/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          500: '#22c55e',
          600: '#16a34a',
        },
        surface: {
          50: '#ffffff',
          100: '#f8fafc',
          900: '#0b1020',
        },
      },
      fontFamily: {
        sans: [
          'Nunito',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
        heading: [
          'Poppins',
          'Montserrat',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
        ],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.06)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
