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
  title: "Holter Holdings | Norwegian Heritage Wealth Management",
  description: "Holter Holdings - Norwegian heritage wealth management firm established 2025, serving discerning American families with discretion and excellence.",
  keywords: "Holter Holdings, Holter, wealth management, Norwegian heritage, private wealth, family office, heritage investments, holter wealth management",
  authors: [{ name: "Holter Holdings" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
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
    title: "Holter Holdings | Norwegian Heritage Wealth Management",
    description: "Holter Holdings - Norwegian heritage wealth management firm serving distinguished American families since 2025.",
    url: "https://holterholdings.com",
    siteName: "Holter Holdings",
    type: "website",
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Holter Holdings',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holter Holdings | Norwegian Heritage Wealth Management",
    description: "Holter Holdings - Norwegian heritage wealth management firm established 2025.",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${playfair.variable} ${crimson.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
