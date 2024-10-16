import { globalStyle } from '@vanilla-extract/css';

// 모든 요소에 대한 기본 스타일 리셋
globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

// body 요소 스타일 리셋
// globalStyle('body', {
//   lineHeight: 1.5,
//   WebkitFontSmoothing: 'antialiased',
// });

// 이미지와 picture 요소 스타일
globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

// 입력 요소들의 폰트 상속
globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

// p, h1, h2, h3, h4, h5, h6 요소의 오버플로우 처리
globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

