module.exports = {
  purge: ['./public/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        body: '#070610',
      },
      textShadow: {
        header: '0px 1px 3px rgba(0, 0, 0, .8)',
      },
      fontSize: {
        xxs: '.60rem',
      },
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
      padding: ['last'],
      margin: ['first', 'last'],
      textColor: ['visited'],
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
