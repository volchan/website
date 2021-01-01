module.exports = {
  purge: ['./public/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        body: '#070610',
      },
      textShadow: {
        'header': '0px 1px 3px rgba(0, 0, 0, .8)',
     }
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
      padding: ['last'],
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
