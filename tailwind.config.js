module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ['Roboto'],
      },
      backgroundImage: theme => ({
        'home': "url('/img/temp.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
