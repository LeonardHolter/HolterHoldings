import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Holter Holdings",
  description: "Meet the team behind Holter Holdings.",
};

const team = [
  { img: "/brett_maxam.jpeg", name: "Brett Maxam", role: "Executive Advisor" },
  { img: "/leonard_holter.jpeg", name: "Leonard Holter", role: "Managing Partner" },
  { img: "/john_colman.jpeg", name: "John Colman", role: "Senior Analyst" },
  { img: "/tommaso_mortara.jpeg", name: "Tommaso Mortara", role: "Analyst" },
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
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 40,
              }}
            >
              {team.map((person) => (
                <div key={person.name}>
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "3/4",
                      overflow: "hidden",
                      marginBottom: 16,
                      background: "var(--tint)",
                    }}
                  >
                    <Image
                      src={person.img}
                      alt={person.name}
                      width={800}
                      height={1067}
                      sizes="(max-width: 768px) 50vw, 25vw"
                      quality={90}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "grayscale(100%)" }}
                    />
                  </div>
                  <div className="ig-title" style={{ marginBottom: 4 }}>{person.name}</div>
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
