import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/app/[locale]/components/theme-provider";
import GoogleAnalytics from "./components/GoogleAnalytics";
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
  title: "Qoodo: Digitális naplózás, újragondolva",
  description: "Könnyű és szabályos önellenőrzés egy modern platformon.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.locale} className={`${gilroy.variable} font-gilroy`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GoogleAnalytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
