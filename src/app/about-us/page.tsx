import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team | Holter Holdings",
  description: "Meet the team behind Holter Holdings, the buyer that acquires generator companies and holds them forever.",
};

export default function AboutUsPage() {
  return (
    <div className="team-page">

      <header className="team-hero">
        <Image
          src="/team.jpg"
          alt="The Holter Holdings team on site with a generator service crew"
          fill
          priority
          sizes="100vw"
          className="team-hero-img"
        />
        <div className="team-hero-scrim" />
        <div className="team-hero-inner">
          <Link href="/" className="team-back">
            &larr; Holter Holdings
          </Link>
          <h1>Team</h1>
        </div>
      </header>

      <div className="team-content">
        <p className="team-lede">
          We have spent years operating service businesses. Our job is to preserve their legacy for
          good.
        </p>

        <section className="team-body">
          <p>
            We have never sold a company. Not one. When we buy a business it is not a position we are
            waiting to exit. There is no fund with a clock on it and no debt loaded onto the company
            after closing.
          </p>
          <p>
            We would rather buy from an honest owner with messy books than a polished one with clean
            ones. Books can be cleaned up. Character cannot.
          </p>
          <p>
            We are a small team. When you write to us, a partner answers, not an associate. If you own
            a generator business and want to know what we would actually pay for it, write to Leonard
            at <a href="mailto:Leonard@holterholdings.com">Leonard@holterholdings.com</a>. He reads
            every email himself.
          </p>
        </section>

        <footer className="pg-foot">
          <div className="foot-legal">
            <span className="foot-contact">
              Contact: <a href="tel:+19296261703">929 626 1703</a>
              &nbsp;&middot;&nbsp; New York, NY 10027
            </span>
            <span style={{ display: "flex", gap: 8 }}>
              <a href="/contact">Contact</a>
              <span style={{ color: "var(--ink3)" }}>&middot;</span>
              <a href="/legal">Legal Disclaimer</a>
              <span style={{ color: "var(--ink3)" }}>&middot;</span>
              <a href="/privacy">Privacy</a>
            </span>
          </div>
        </footer>
      </div>

    </div>
  );
}
