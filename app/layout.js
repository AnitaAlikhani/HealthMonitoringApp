import { Inter } from "next/font/google";
import "./globals.css";
import { Box, ThemeProvider } from "@mui/material";
import { THEME } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "سامانه‌ پایش سلامت",
  description: "ُThe Health-Care App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <ThemeProvider theme={THEME}>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
