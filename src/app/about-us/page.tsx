import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Holter Holdings",
  description: "Meet the team behind Holter Holdings.",
};

const team = [
  { img: "/brett_maxam.jpeg", name: "Brett Maxam", role: "Partner" },
  { img: "/leonard_holter.jpeg", name: "Leonard Holter", role: "Managing Partner" },
  { img: "/john_colman.jpeg", name: "John Colman", role: "Senior Analyst" },
  { img: "/tommaso_mortara.jpeg", name: "Tommaso Mortara", role: "Analyst" },
];

export default function AboutUsPage() {
  return (
    <div className="container">
      <Link href="/" className="brand-title" style={{ display: "block" }}>
        Holter Holdings
      </Link>

      <section className="hero">
        <h1>
          The people behind <em>our success.</em>
        </h1>
        <p>
          Our team has spent decades acquiring, operating, and scaling service companies. We understand what makes
          great service businesses tick because we&apos;ve built and run them ourselves.
        </p>
      </section>

      <section className="section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            columnGap: 32,
            rowGap: 48,
            maxWidth: 880,
          }}
        >
          {team.map((person) => (
            <article
              key={person.name}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
            >
              <div
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginBottom: 18,
                  background: "var(--tint)",
                }}
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  width={280}
                  height={280}
                  unoptimized
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    filter: "grayscale(100%)",
                  }}
                />
              </div>
              <h2
                style={{
                  fontFamily: "var(--cormorant)",
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: "-0.005em",
                  lineHeight: 1.1,
                  color: "var(--ink)",
                  marginBottom: 6,
                }}
              >
                {person.name}
              </h2>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ink3)",
                }}
              >
                {person.role}
              </div>
            </article>
          ))}
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
