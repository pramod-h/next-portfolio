import { Analytics } from "@vercel/analytics/react";
import { Manrope, Libre_Baskerville } from "next/font/google";
import "@/assets/globals.scss";
import commonConfig from "@/database/config/metadata.json";
import LenisScroller from "@/components/UI/LenisScroller/LenisScroller";
import Footer from "@/components/Layout/Footer/Footer";
import CustomCursor from "@/components/UI/Elements/CustomCursor/CustomCursor";
import Header from "@/components/Layout/Header/Header";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});
export const altFont = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-alt",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: commonConfig.metadata.title,
  description: commonConfig.metadata.description,
};

export const viewport = {
  themeColor: "#FFD600",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bodyFont.className}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Pramod's Portfolio" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CustomCursor />
        <LenisScroller />
        <Analytics />
      </body>
    </html>
  );
}
