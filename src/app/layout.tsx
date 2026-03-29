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
  title: "Holter Holdings | We Buy Garage Door Businesses",
  description: "We buy garage door businesses from founders. Fair offer in 7 days, close in 30. Your team and culture stay intact. We never sell.",
  keywords: "buy garage door business, sell garage door company, garage door acquisition, home services acquisition, garage door business buyer, sell my garage door business, Holter Holdings, Leonard Holter, permanent capital, founder exit",
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
    title: "Holter Holdings | We Buy Garage Door Businesses",
    description: "We buy garage door businesses from founders. Fair offer in 7 days, close in 30. Your team and culture stay intact. We never sell.",
    url: "https://holterholdings.com",
    siteName: "Holter Holdings",
    type: "website",
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Holter Holdings - We Buy Garage Door Businesses',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holter Holdings | We Buy Garage Door Businesses",
    description: "We buy garage door businesses from founders. Fair offer in 7 days, close in 30. Your team and culture stay intact.",
    images: ['/android-chrome-512x512.png'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Holter Holdings",
  "url": "https://holterholdings.com",
  "logo": "https://holterholdings.com/android-chrome-512x512.png",
  "description": "We buy garage door businesses from founders. Fair offer in 7 days, close in 30. Your team and culture stay intact.",
  "founder": {
    "@type": "Person",
    "name": "Leonard Holter"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "Leonard@holterholdings.com",
    "contactType": "sales"
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${crimson.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
