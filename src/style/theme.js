const theme = {
  color: {
    default: '#93918f',
    black: '#000000',
    white: '#ffffff',
    gray300: '#d5d5d5',
    gray700: '#636363',
  },
  fontFamily: {
    default: '"Montserrat", sans-serif',
    heading: '"Bitter", serif',
  },
  fontSize: {
    // Use rem
    // To convert from px to rem -> fontsize in px / 16px (browser default)
    default: '1rem',
    small: '0.875rem',
    h1: '2.375rem',
    h2: '1.5rem',
  },
  lineHeight: {
    // Use number
    // To convert from px to number -> lineheight in px / element font-size in px
    default: 1.69,
    h1: 1.2,
    h2: 1.2083,
  },
};

export default theme;
