import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Holter Holdings",
  description: "Meet the team behind Holter Holdings.",
};

const team = [
  { name: "Leonard Holter", role: "Managing Partner" },
  { name: "Brett Maxam", role: "Executive Advisor" },
  { name: "John Colman", role: "Senior Analyst" },
  { name: "Tommaso Mortara", role: "Analyst" },
];

export default function AboutUsPage() {
  return (
    <>
      <Nav />
      <div className="page">
        <section className="section" style={{ paddingTop: 80 }}>
          <div className="about-hero">
            <p className="section-label">The Team</p>
            <h1>About Us</h1>
          </div>
        </section>

        <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div className="index-grid">
              {team.map((person) => (
                <div
                  key={person.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    padding: "22px 4px",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  <div className="ig-title">{person.name}</div>
                  <div className="ig-meta">{person.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
