import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Holter Holdings",
  description: "Meet the team behind Holter Holdings, the buyer that acquires generator companies and holds them forever.",
};


export default function AboutUsPage() {
  return (
    <div className="container">
      <Link href="/" className="brand-title" style={{ display: "block" }}>
        Holter Holdings
      </Link>

      <section className="hero">
        <h1>Team</h1>
        <p>
          We have spent years operating service businesses. We are not the ones who run the
          companies we buy. Our job is to preserve their legacy for good.
        </p>
      </section>

      <section className="section">
        <div className="team-photo">
          <Image
            src="/team.jpg"
            alt="The Holter Holdings team on site with a generator service crew"
            width={2000}
            height={1116}
            priority
          />
        </div>
      </section>

      <footer className="foot">
        <div className="foot-legal">
          <span className="foot-contact">
            Contact: <a href="tel:+19296261703">929 626 1703</a>
            &nbsp;·&nbsp; New York, NY 10027
          </span>
          <span>
            <a href="/contact">Contact</a>
            {" · "}
            <a href="/legal">Legal Disclaimer</a>
            {" · "}
            <a href="/privacy">Privacy</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
