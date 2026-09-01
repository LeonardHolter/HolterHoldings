import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About | Holter Holdings - Why We Only Buy Generator Companies",
  description: "Learn why Holter Holdings was started and how we became the buyer we wish we could have sold to. We buy generator companies from founders and hold them forever.",
  openGraph: {
    title: "About | Holter Holdings - Why We Only Buy Generator Companies",
    description: "We started Holter Holdings after going through the misery of selling to traditional buyers. Now we buy generator companies the right way - fair, fast, and forever.",
    url: "https://holterholdings.com/about",
    siteName: "Holter Holdings",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Holter Holdings - Why We Only Buy Generator Companies",
    description: "We started Holter Holdings after going through the misery of selling to traditional buyers. Now we buy generator companies the right way.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
