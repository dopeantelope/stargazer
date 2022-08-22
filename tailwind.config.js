/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px' 
    },
    extend: {
      colors: {
        darkBlueBackground: 'hsl(230, 35%, 7%)',
        lightBlue: 'hsl(231, 77%, 90%)',
        kindaWhite: 'rgba(255, 255, 255, 0.4)'
  
      }
    },
  },
  plugins: [],
}
