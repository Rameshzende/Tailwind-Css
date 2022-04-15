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
      colors : {
        brigthRed : 'hsl(12, 88%, 59%)',
        brigthRedLight : 'hsl(12, 88%, 69%)',
        brigthRedSupLight : 'hsl(12, 88%, 95%)',
        darkBlue : 'hsl(228, 39%, 23%)',
        darkGrayishBlue : 'hsl(227, 12%, 61%)',
        veryDarkBlue : 'hsl(223, 12%, 13%)',
        veryPaleRed : 'hsl(13, 100%, 96%)',
        veryLightGray : 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
