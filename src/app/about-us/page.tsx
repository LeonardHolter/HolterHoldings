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
          We have spent years operating service businesses. Our job is to preserve their legacy for
          good.
        </p>
      </section>

      <section className="team-body">
        <p>
          We started as operators, not investors. We have built and run companies in the trades, in
          New York and in Oslo, and we have sold a business to a buyer who changed the deal after
          the handshake. That is where our judgment comes from.
        </p>
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
          Leonard studied computer science at Columbia University. We are not going to turn your
          shop into a software company. But most service businesses run on a phone, a whiteboard,
          and one person&apos;s memory, and the back office is usually where the owner ran out of
          time. Scheduling, dispatch, invoicing, renewals on service contracts. We know how to build
          that properly and quietly, without touching the parts of the business that already work.
        </p>
        <p>
          We are a small team. When you write to us, a partner answers, not an associate. If you own
          a generator business and want to know what we would actually pay for it, write to Leonard
          at <a href="mailto:Leonard@holterholdings.com">Leonard@holterholdings.com</a>. He reads
          every email himself.
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
