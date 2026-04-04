import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Holter Holdings — Private Equity Intern",
  description:
    "Join Holter Holdings as a Private Equity Intern. Support our deal team across origination, diligence, and portfolio management in a lean, high-ownership environment.",
  openGraph: {
    title: "Careers | Holter Holdings — Private Equity Intern",
    description:
      "Join Holter Holdings as a Private Equity Intern. Direct deal exposure from day one, mentorship from experienced investors, and work that actually matters.",
    url: "https://holterholdings.com/careers",
    siteName: "Holter Holdings",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Holter Holdings — Private Equity Intern",
    description:
      "Join Holter Holdings as a Private Equity Intern. Direct deal exposure, mentorship, and a lean environment where your work matters.",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
