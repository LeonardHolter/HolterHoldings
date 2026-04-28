import type { Metadata } from "next";
import { Instrument_Serif, Cormorant_Garamond, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://holterholdings.com"),
  title: "Holter Holdings - Buying Good Businesses",
  description:
    "Permanent capital. Plain English. A fair offer in a week, a clean close in a month, and a written promise to leave a good business alone.",
  keywords:
    "buy great business, sell your business, business acquisition, home services acquisition, small business buyer, sell my business, Holter Holdings, Leonard Holter, permanent capital, founder exit",
  authors: [{ name: "Holter Holdings" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Holter Holdings - Buying Good Businesses",
    description:
      "Permanent capital. Plain English. A fair offer in a week, a clean close in a month, and a written promise to leave a good business alone.",
    url: "https://holterholdings.com",
    siteName: "Holter Holdings",
    type: "website",
  },
};

const fontVars = [
  instrumentSerif.variable,
  cormorantGaramond.variable,
  newsreader.variable,
  jetbrainsMono.variable,
].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVars}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
