import { createGlobalTheme, style } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  
  colors: {
    gray: {
      50: '#F7F7F7',
      100: '#EBEBEB',
      200: '#D1D1D1',
      300: '#B8B8B8',
      400: '#9E9E9E',
      500: '#858585',
      600: '#6B6B6B',
      700: '#525252',
      800: '#383838',
      900: '#1F1F1F'
    },
  },
  
});



export const label1 = style({
  fontFamily: '"Wanted Sans"',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '140%',
  letterSpacing: '-0.28px',
});

export const label2 = style({
  fontFamily: '"Wanted Sans"',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '140%',
  letterSpacing: '0.24px',
})

export const h5 = style({
  fontFamily: '"Wanted Sans"',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '140%',
  letterSpacing: '-0.18px',
})

export const p5 = style({
  fontFamily: '"Wanted Sans"',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '140%',
  letterSpacing: '-0.14px',
})
