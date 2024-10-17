import { style } from "@vanilla-extract/css";
import * as globalStyles from "../../style/global.css";

export const CategoryWholeContainer = style({
  display: "flex",
  overflowX: "auto",
  width: "100%",
  maxWidth: "375px",
  alignItems: "center",
  height: "",
  WebkitOverflowScrolling: "touch",
  paddingLeft: "24px",
  "::-webkit-scrollbar": {
    display: "none"
  },
});

export const CategoryContainer = style({
  display: "flex",
  gap: "16px",
  padding: "0 12px", 
  minWidth: "min-content",
});

export const CategorySubContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2px",
  padding:"8px",
  flex: "0 0 auto",
});

export const SelectedCategory = style({
  color: globalStyles.vars.colors.gray[900],
  borderBottom: `2px solid ${globalStyles.vars.colors.gray[900]}`,
});