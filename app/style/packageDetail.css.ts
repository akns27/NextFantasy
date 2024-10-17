import { style } from "@vanilla-extract/css";
import * as globalStyles from "../style/global.css";
import "./global.css";

//style > packageDatail.css.ts
export const datailImage = style({
  objectFit: "cover",
});

export const detailTitle = style({
  zIndex: "10",
  width: "188px",
  color: "#FFF",
  textAlign: "center",
  textShadow:
    "-1px 1px 3px rgba(83, 83, 83, 0.25), 1px -1px 3px rgba(83, 83, 83, 0.25)",
  fontFamily: '"210 전봇대"',
  fontSize: "40px",
  lineHeight: "120%",
  letterSpacing: "0.4px",
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -50% )",
});

export const Wrap = style({
  width: "100%",
  position: "relative",
});


export const BackPage = style({
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -50% )",
})