import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Leonard Holter - Holter Holdings | Managing Partner & Wealth Management",
  description: "Leonard Holter, Managing Partner at Holter Holdings. Norwegian heritage wealth management firm established 2005, serving discerning American families with discretion and excellence.",
  keywords: "Leonard Holter, Holter Holdings, Edward Holter, wealth management, Norwegian heritage, private wealth, family office, managing partner, holter, leonard holter managing partner",
  authors: [{ name: "Leonard Holter" }, { name: "Holter Holdings" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Leonard Holter - Holter Holdings | Managing Partner",
    description: "Leonard Holter leads Holter Holdings, a Norwegian heritage wealth management firm serving distinguished American families since 2005.",
    url: "https://holterholdings.com",
    siteName: "Holter Holdings",
    type: "website",
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Leonard Holter - Holter Holdings',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonard Holter - Holter Holdings | Managing Partner",
    description: "Leonard Holter leads Holter Holdings, Norwegian heritage wealth management firm established 2005.",
    images: ['/android-chrome-512x512.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${crimson.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
