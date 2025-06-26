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
  title: "Holter Holdings - Wealth Preservation Since 1887",
  description: "Established heritage investment house specializing in generational wealth preservation and time-honored investment strategies for discerning families.",
  keywords: "private wealth management, family office, heritage investments, generational wealth, trust management",
  authors: [{ name: "Holter Holdings" }],
  robots: "index, follow",
  openGraph: {
    title: "Holter Holdings - Wealth Preservation Since 1887",
    description: "Heritage investment house specializing in generational wealth preservation for distinguished families.",
    url: "https://holterholdings.com",
    siteName: "Holter Holdings",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holter Holdings - Wealth Preservation Since 1887",
    description: "Heritage investment house specializing in generational wealth preservation for distinguished families.",
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
