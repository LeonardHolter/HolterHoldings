import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { ArrowRight } from '@/components/Icons';

const values = [
  { title: 'Speak plainly', desc: "No BS, buzzwords, or stupid finance terms. We say what we mean and we mean what we say." },
  { title: 'Protect culture', desc: "We don't mess with the culture that makes each company unique. It's their greatest asset." },
  { title: 'Stay independent', desc: "We leave all our businesses to operate independently. No forced integration, no synergy nonsense." },
  { title: 'Make founders proud', desc: "Founders entrust us with their life's work. We take that seriously and follow through on their vision." },
  { title: 'No nonsense', desc: "Life is too short for difficult people, hidden agendas, and complicated structures." },
  { title: 'Leave people alone', desc: "We buy great companies, hire great leaders, and leave them to do their thing." },
];

const steps = [
  { num: '01', title: 'First conversation', desc: "A short call to understand your business, your goals, and whether we're a good fit. No commitment." },
  { num: '02', title: 'We do our homework', desc: "We review the key financials and operations. We move fast — typically 3–5 business days." },
  { num: '03', title: 'Letter of intent', desc: "A clear, plain-English offer letter. No tricks, no bait-and-switch. What you see is what you get." },
  { num: '04', title: 'Due diligence', desc: "A streamlined process. We're not trying to find reasons to lower the price — we're building trust." },
  { num: '05', title: 'Close', desc: 'As quick as 30 days from first conversation. Cash wired, keys handed over. Done.' },
];

const team = [
  { img: '/leonard-photo.png', name: 'Leonard Holter', role: 'Chairman' },
  { img: '/john-colman.png', name: 'John Colman', role: 'Senior Analyst' },
  { img: '/tommaso-mortara.png', name: 'Tommaso Mortara', role: 'Analyst' },
];

export default function AboutClient() {
  return (
    <>
      <Nav />
      <div className="page">
        <section className="section" style={{ paddingTop: 80 }}>
          <div className="about-hero">
            <p className="section-label">Our Story</p>
            <h1>
              An overnight success,
              <br />
              <em>a few years</em>
              <br />
              in the making.
            </h1>
          </div>
        </section>

        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="story-text">
            <p>
              We started out as <strong>operators, not investors.</strong> We never intended to become buyers.
            </p>
            <p>
              We spent years building and running businesses in the trades and service industries. Along the way, we
              learned what actually makes these companies tick — the routes, the technicians, the recurring customers,
              the local trust that takes a decade to build.
            </p>
            <p>
              Every once in a while, we&apos;d get an email from a private equity firm. Their emails were confusing.
              They bragged about their &lsquo;AUM&rsquo; and &lsquo;CAGR&rsquo; and dropped that they&apos;d gone to
              Harvard every third sentence. They were aliens. We didn&apos;t speak their language. Spreadsheet jockeys
              who&apos;d never met a payroll.
            </p>
          </div>
          <div style={{ maxWidth: 320, margin: '60px auto' }}>
            <Image
              src="/people-chasing.png"
              alt="Chaos of traditional M&A"
              width={320}
              height={240}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div className="story-text">
            <p>
              Eventually, we gave in and sold one of our businesses to them. It was a brutal six-month marathon. Piles
              of legal documents, constant renegotiations, and all-day meetings that spooked our management team.
            </p>
            <p>By closing, we were exhausted and barely recognized the deal we&apos;d originally shaken hands on.</p>
            <p>
              Then we read about how Warren Buffett does billion-dollar deals quickly by keeping the process painless
              and promising founders to take good care of their businesses. Nobody had done this for great companies
              like ours, so we said <strong>&quot;screw it&quot;</strong> and decided to do it ourselves,{' '}
              <em>using Buffett&apos;s simple approach.</em>
            </p>
          </div>
          <div style={{ maxWidth: 580, margin: '60px auto' }}>
            <Image
              src="/buffett.png"
              alt="Inspired by Warren Buffett"
              width={580}
              height={400}
              style={{ width: '100%', height: 'auto', objectFit: 'contain', mixBlendMode: 'screen' }}
            />
          </div>
          <div className="story-text">
            <p>
              <strong>We started Holter Holdings to be different.</strong> To become the buyer we <em>wish</em> we
              could have sold to.
            </p>
            <p>
              We thought about all the things we hated about selling our company and worked backwards, then used our
              capital to buy wonderful businesses from founders like us.
            </p>
            <p>
              It turns out that selling your company doesn&apos;t need to be so complicated and miserable. We make
              offers in days, not months, let founders dictate their role (stay, go, or something in between), and
              leave the companies we acquire alone for the long term.
            </p>
            <p>So far, it&apos;s worked out well. Our portfolio is growing and we&apos;re still going.</p>
            <p>
              <strong>
                Life is too short to sell to a guy named Chad who calls your team &quot;human capital.&quot;
              </strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="section-label">Our Principles</p>
            <h2 className="section-h2" style={{ marginBottom: 52 }}>
              How we do it
            </h2>
            <div className="values-grid">
              {values.map((v, i) => (
                <div className="value-item" key={v.title}>
                  <span className="value-num">0{i + 1}</span>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="section-label">The Process</p>
            <h2 className="section-h2" style={{ marginBottom: 52 }}>
              Simple by design
            </h2>
            <div className="process-steps">
              {steps.map((step) => (
                <div className="process-step" key={step.num}>
                  <span className="process-step-num">Step {step.num}</span>
                  <div className="process-step-title">{step.title}</div>
                  <div className="process-step-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="section-label">Leadership</p>
            <h2 className="section-h2" style={{ marginBottom: 52 }}>
              Our team
            </h2>
            <div className="team-grid">
              {team.map((p) => (
                <div className="team-card" key={p.name}>
                  <Image src={p.img} alt={p.name} width={400} height={533} />
                  <div className="team-card-info">
                    <div className="team-name">{p.name}</div>
                    <div className="team-role">{p.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="cta-section">
          <h2 className="cta-h2">
            Ready to skip
            <br />
            the <em>BS?</em>
          </h2>
          <a
            href="mailto:Leonard@holterholdings.com"
            className="btn-primary"
            style={{ fontSize: 14, padding: '16px 36px' }}
          >
            Get in touch <ArrowRight />
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
}
