import { createGlobalTheme, style } from "@vanilla-extract/css";

export const WholeContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#C0D2B4",
  // position: "fixed",
});

//global.css.ts
export const MobileContainer = style({
  width: "375px",
  margin: "0 auto",
  height: "812px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
});

export const fixedHeader = style({
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: "#FFFFFF",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  marginTop: "50px",
});

export const scrollableContent = style({
  flexGrow: 1,
  overflowY: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  paddingTop: "30px",
});

export const vars = createGlobalTheme(":root", {
  colors: {
    gray: {
      50: "#F7F7F7",
      100: "#EBEBEB",
      200: "#D1D1D1",
      300: "#B8B8B8",
      400: "#9E9E9E",
      500: "#858585",
      600: "#6B6B6B",
      700: "#525252",
      800: "#383838",
      900: "#1F1F1F",
    },
  },
});

export const label1 = style({
  fontFamily: '"Wanted Sans"',
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "140%",
  letterSpacing: "-0.28px",
});

export const label2 = style({
  fontFamily: '"Wanted Sans"',
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "140%",
  letterSpacing: "0.24px",
});

export const h5 = style({
  fontFamily: '"Wanted Sans"',
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "140%",
  letterSpacing: "-0.18px",
});

export const p5 = style({
  fontFamily: '"Wanted Sans"',
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "140%",
  letterSpacing: "-0.14px",
});
