module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#161E2E',
        'secondary': '#3F75FF',
        'increase': '#32C34A',
        'yellow': '#ECC04B',
        'yellow-100': 'rgba(236, 192, 75, 0.1)',
        'cyan': '#2EBDC2',
        purple: '#5242A2',
      },
      fontFamily: {
        'sans': ['Montserrat']
      },
      minWidth: {
        '0': '0',
        '96': '24rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
