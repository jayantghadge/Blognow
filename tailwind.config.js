/** @type {import('tailwindcss').Config} */
5
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        darkBlue: 'hsl(200, 90%, 20%)',
        darkGrey: 'hsl(214, 4%, 69%)',
        brightBlue: '	hsl(211, 96%, 65%)',
        brightGreen: 'hsl(173, 79%, 37%)',
        darkGreen: 'hsl(100, 40%, 30%)',
        darkRed: 'hsl(0, 88%, 50%)',
        brightGrey: '	hsl(0, 0%, 96%)'
      },
      width: {
        '90': '22rem'
      }
    },
  },
  plugins: [],
}