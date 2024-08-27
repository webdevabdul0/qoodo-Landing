import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/app/[locale]/components/theme-provider";
import CookieConsent from "./components/CookieConsent";
const inter = Inter({ subsets: ["latin"] });

const gilroy = localfont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
    },

    {
      path: "../../public/fonts/Gilroy-Semibold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
    },
  ],

  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Qoodo",
  description: "Qoodo",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang} className={`${gilroy.variable} font-gilroy`}>
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
