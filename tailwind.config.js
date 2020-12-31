module.exports = {
  purge: ['./public/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        body: '#070610',
      },
    },
  },
  variants: {
    extend: {
      padding: ['last'],
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
