import type { Metadata } from "next";
import "./style/reset.css";
import * as globalStyles from "./style/global.css";
import Image from "next/image";
import TopNav from "./public/images/OS/Bar/Top Navigation.svg";

export const metadata: Metadata = {
  title: "NextFantasy",
  description: "generated by pkw",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={globalStyles.WholeContainer}>
      
      <body>{children}</body>
    </html>
  );
}
