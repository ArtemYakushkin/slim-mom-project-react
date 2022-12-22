// const body = document.querySelector('body');

// const christmasThemeOn = () => {
//   const day = new Date().getDate();
//   const month = new Date().getMonth();
//   if (day >= 19 && month === 11) {
//     body.classList.add('christmas');
//   } else if (day >= 15 && month === 0) {
//     body.classList.remove('christmas');
//   }
// };
// christmasThemeOn();

export const theme = {
  colors: {
    black: '#212121',
    gray: '#9B9FAA',
    orange: '#FC842D',
    blue: '#264061',
    backgroundGray: '#F0F1F3',
    white: '#ffffff',
    hover: '#f07116',
    filter: 'none',
  },
  fonts: {
    body: 'VerdanaBold, sans-serif',
    secondary: 'VerdanaRegular, sans-serif',
    tertiary: 'GothamProBold',
  },
  space: [0, 4, 8, 16, 20, 32, 64, 128, 256, 512].map(n => n + 'px'),
  fontSizes: [14, 18, 24, 34, 36].map(n => n + 'px'),
  lineHeights: {
    body: 1.2,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid #E0E0E0',
    header: '1px solid #E0E0E0',
    btn: '2px solid #FC842D',
    hover: '2px solid #f07116',
  },
  btnBefore: {
    position: 'none',
    top: 'none',
    left: 'none',
    width: 'none',
    height: 'none',
    background: 'none',
    borderRadius: 'none',
    boxShadow: 'none',
  },
  btnAfter: {
    position: 'none',
    top: 'none',
    left: 'none',
    width: 'none',
    height: 'none',
    background: 'none',
    borderRadius: 'none',
    boxShadow: 'none',
  },
};

export const christmasTheme = {
  colors: {
    black: '#9B9FAA',
    gray: '#D6001C',
    orange: '#D6001C',
    blue: '#264061',
    backgroundGray: 'transparent',
    white: '#ffffff',
    hover: '#B10522',
    filter: 'drop-shadow(0 0 0px white)',
  },
  fonts: {
    body: 'VerdanaBold, sans-serif',
    secondary: 'VerdanaRegular, sans-serif',
    tertiary: 'GothamProBold',
  },
  space: [0, 4, 8, 16, 20, 32, 64, 128, 256, 512].map(n => n + 'px'),
  fontSizes: [14, 18, 24, 34, 36].map(n => n + 'px'),
  lineHeights: {
    body: 1.2,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid #E0E0E0',
    header: '1px solid #D6001C',
    btn: '2px solid #D6001C',
    hover: '2px solid #B10522',
  },
  btnBefore: {
    position: 'absolute',
    top: '-11px',
    left: '5px',
    width: '72px',
    height: '22px',
    background: '#fff',
    borderRadius: '50%',
    boxShadow: '50px -15px 0 10px #fff',
  },
  btnAfter: {
    position: 'absolute',
    top: '-8px',
    left: '167px',
    width: '50px',
    height: '20px',
    background: '#fff',
    borderRadius: '50%',
    boxShadow: '-35px -10px 0 10px #fff',
  },
};
