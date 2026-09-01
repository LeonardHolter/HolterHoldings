import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Holter Holdings",
  description: "Meet the team behind Holter Holdings, the buyer that acquires generator companies and holds them forever.",
};

const team = [
  { img: "/brett_maxam.jpeg", name: "Brett Maxam", role: "Partner" },
  { img: "/leonard_holter.jpeg", name: "Leonard Holter", role: "Managing Partner" },
  { img: "/john_colman.jpeg", name: "John Colman", role: "Senior Analyst" },
  { img: "/tommaso_mortara.jpeg", name: "Tommaso Mortara", role: "Senior Analyst" },
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
          Our team has spent decades acquiring, operating, and scaling service companies. Today all of that goes
          into a single industry: generators. We understand what makes a standby power business tick - the service
          contracts, the techs, the dealer agreement - because we&apos;ve built and run companies like it ourselves.
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

      <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
        <p className="section-label" style={{ marginBottom: 12 }}>Companies We Own</p>
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: 13,
            lineHeight: 1.6,
            color: "var(--ink3)",
            maxWidth: 620,
            marginBottom: 32,
          }}
        >
          Our acquisitions today are generator businesses only. These are the companies already in the family.
        </p>
        <div className="companies-grid">

          <div className="company-card">
            <div className="company-logo-wrap">
              <Image
                src="/Morcrete.webp"
                alt="Morcrete Concrete Flatwork"
                width={220}
                height={72}
                style={{ objectFit: "contain", objectPosition: "left center", mixBlendMode: "multiply" }}
              />
            </div>
            <div className="company-desc">Concrete Flatwork - Driveways, Patios, Walkways</div>
          </div>

          <div className="company-card">
            <div className="company-logo-wrap">
              <Image
                src="/kiconsult-logo.png"
                alt="KI Consult"
                width={72}
                height={72}
                style={{ objectFit: "contain", flexShrink: 0 }}
              />
              <span style={{
                fontFamily: "var(--sans)",
                fontWeight: 700,
                fontSize: 22,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
              }}>
                KI Consult<span style={{ color: "var(--green-hover)" }}>.no</span>
              </span>
            </div>
            <div className="company-desc">AI Receptionist for Phone, Chat & Web - Oslo, Norway</div>
          </div>

          <div className="company-card">
            <div className="company-logo-wrap">
              <Image
                src="/holter-bygg-logo.png"
                alt="Holter Bygg"
                width={76}
                height={88}
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </div>
            <div className="company-desc">General Contracting & Renovation - Oslo, Norway</div>
          </div>

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
