import { style } from "@vanilla-extract/css";
import * as globalStyles from "../../style/global.css";

export const SearchBarStyle = style({
  display: "flex",
  width: "327px",
  paddingLeft: "14px",
  paddingTop: "14px",
  paddingBottom:"14px",
  alignItems: "center",
  gap: "8px",
  backgroundColor: globalStyles.vars.colors.gray[50],
  borderRadius: "24px",
});

export const inputStyle = style({
  background: 'transparent',
  border: 'none',
  outline: 'none',
  width: '100%',
  fontFamily: '"Wanted Sans"',
  fontWeight: 400,
  fontSize: '16px',
  color: globalStyles.vars.colors.gray[900],
  '::placeholder': {
    color: globalStyles.vars.colors.gray[400], 
    fontSize: '14px', 
  }
});