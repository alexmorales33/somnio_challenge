// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import ThemeContext from "@/context/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somnio Software",
  description: "Somnio Software Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContext>
          <StoreProvider>
            {children}
          </StoreProvider>
        </ThemeContext>
      </body>
    </html>
  );
}
