import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import local from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const gilroy = localfont({
  src: [
    {
      path: "../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
    },

    {
      path: "../public/fonts/Gilroy-Semibold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
    },
  ],

  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Qoodo",
  description: "Qoodo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gilroy.variable} font-gilroy`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
