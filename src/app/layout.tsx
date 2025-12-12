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
  title: "Holter Holdings | Permanent Capital for Lower Middle Market Companies",
  description: "Holter Holdings partners with family and founder-owned companies in the lower middle market. We bring patient capital, Ivy League networks, and a hands-in approach to optimize growth while preserving legacy. We buy to hold forever.",
  keywords: "Holter Holdings, permanent capital, lower middle market, family office, Leonard Holter, facility services, professional services, acquisitions, private equity, business acquisitions, Columbia University",
  authors: [{ name: "Holter Holdings" }],
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
    title: "Holter Holdings | Permanent Capital for Lower Middle Market Companies",
    description: "We partner with family and founder-owned companies in the lower middle market. Patient capital, Ivy League networks, and a hands-in approach. We never sell.",
    url: "https://holterholdings.com",
    siteName: "Holter Holdings",
    type: "website",
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Holter Holdings - Permanent Capital Partner',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holter Holdings | Permanent Capital for Lower Middle Market Companies",
    description: "Patient capital for family and founder-owned companies. Ivy League networks, hands-in approach. We buy to hold forever.",
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
