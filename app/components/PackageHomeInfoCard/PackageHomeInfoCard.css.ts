import { style } from "@vanilla-extract/css";

export const HomeInfoCard = style({
  display: "flex",
  width: "327px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
});

export const HomeInfoCardImage = style({
  alignItems: "center",
  borderRadius: "12px",
});

export const CardImageContainer = style({
  width: "100%",
  height: "327px",
  position: "relative",
  overflow: "hidden",
});

export const InstructionTexts = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
});

export const UpperInstruction = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "4px",
});

export const Rating = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});
