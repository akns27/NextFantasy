import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '10px',
  maxWidth: '600px',
  margin: '0 auto',
});

export const textContainer = style({
  flex: 1,
  marginRight: '20px',
});

export const title = style({
  fontFamily: "WantedSans",
  fontSize: '22px',
  fontWeight: 'bold',
  marginBottom: '10px',
});

export const description = style({
  fontFamily: "WantedSans",
  fontSize: '14px',
  lineHeight: 1.5,
});

export const imageStyle = style({
  borderRadius: '50%',
});