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
  title: "Holter Holdings | Norwegian Family Office Expanding to the US",
  description: "Holter Holdings - A generational Norwegian family office expanding to the United States under Leonard Holter's leadership. Acquiring and transforming B2B services companies with multi-generational wisdom and modern innovation.",
  keywords: "Holter Holdings, family office, Norwegian heritage, Leonard Holter, B2B services, acquisitions, generational capital, private equity, business acquisitions",
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
    title: "Holter Holdings | Norwegian Family Office Expanding to the US",
    description: "A generational Norwegian family office expanding to the US under Leonard Holter's leadership, acquiring and transforming B2B services companies.",
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
    title: "Holter Holdings | Norwegian Family Office Expanding to the US",
    description: "A generational Norwegian family office expanding to the US under Leonard Holter's leadership.",
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
