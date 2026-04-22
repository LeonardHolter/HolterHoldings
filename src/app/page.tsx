import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { ArrowRight, Check, Cross } from '@/components/Icons';

const peItems: [boolean, string][] = [
  [true, 'Full or partial cash out'],
  [false, '3–6 month process'],
  [false, 'Founders locked in with earnout structure'],
  [false, 'Terms could make your equity worthless'],
  [false, 'Intervenes and changes your culture'],
  [false, 'Typically flips your company in 3–5 years'],
];

const holterItems = [
  'Full or partial cash out',
  'Deal size ranging from $1M–$10M',
  'Potential 30-day close',
  'Founders can stay, go, or anything in between',
  'Simple structure, cash upfront',
  'Focus on operational excellence & culture',
  'Holds companies for the long term',
];

const criteria = [
  { img: '/icon-highmargins.png', title: 'High Margins', sub: 'Healthy and sustainable profit margins.' },
  { img: '/icon-unique-advantage.png', title: 'Unique Advantage', sub: "A brand, community, or niche that's hard to replicate." },
  { img: '/icon-simple-model.png', title: 'Simple Business Model', sub: 'You can explain it to your parents.' },
  { img: '/icon-highprofit.png', title: 'Healthy Profit', sub: '$500k to $3 million EBITDA.' },
  { img: '/icon-successful-ops.png', title: 'Proven Operations', sub: 'Three or more years of successful operations.' },
  { img: '/icon-quality-team.png', title: 'Quality Team', sub: 'A great team with a positive culture.' },
  { img: '/icon-positive.png', title: 'Ethical Approach', sub: 'Positive values. No sketchy stuff.' },
];

export default function Home() {
  return (
    <>
      <Nav />
      <div className="page">
        {/* Hero */}
        <section className="hero">
          <div className="hero-left">
            <h1 className="hero-h1">
              We buy <em>great</em>
              <br />
              service
              <br />
              businesses.
            </h1>
            <p className="hero-sub">
              We partner with founders ready to move on — providing clean, fast exits that protect their teams,
              preserve their culture, and keep the business running for the long term.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="mailto:Leonard@holterholdings.com" className="btn-primary">
                Start a conversation <ArrowRight />
              </a>
              <Link href="/about" className="btn-outline">
                Our story <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="hero-right">
            <Image
              src="/garage-door-tech.png"
              alt="Service business technician"
              width={620}
              height={620}
              priority
            />
          </div>
          <div className="hero-rule" />
        </section>

        {/* Stats */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-num">7</div>
            <div className="stat-label">Days to receive a fair offer</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">30</div>
            <div className="stat-label">Days to close, minimum</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">$1–10M</div>
            <div className="stat-label">Deal size range</div>
          </div>
        </div>

        {/* Chaos */}
        <section className="section">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="section-label">The Problem</p>
            <div className="chaos-grid">
              <div>
                <Image
                  className="chaos-img"
                  src="/selling-chaos-v2.png"
                  alt="The chaos of traditional company sales"
                  width={1024}
                  height={1024}
                  quality={100}
                />
              </div>
              <div className="chaos-text">
                <h2 className="section-h2">
                  Selling your company
                  <br />
                  shouldn&apos;t look
                  <br />
                  <em>like this.</em>
                </h2>
                <p className="section-body" style={{ marginTop: 24 }}>
                  After watching too many great operators go through the misery of selling to traditional buyers, we
                  started Holter Holdings to become the buyer we wish existed for them.
                </p>
                <p className="section-body" style={{ fontWeight: 500, color: 'var(--fg)' }}>
                  We do it differently.
                </p>
                <p className="section-body">
                  A fair offer in 7 days. Close in as quick as 30. Keep your team and culture intact. No months of
                  negotiations. No legal fee surprises. No watching your life&apos;s work get dismantled.
                </p>
                <Link href="/about" className="btn-outline" style={{ marginTop: 8 }}>
                  Why we started Holter Holdings <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="section" style={{ paddingTop: 80, borderBottom: 'none' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="section-label">How We Compare</p>
            <h2 className="section-h2" style={{ marginBottom: 80 }}>
              Holter Holdings
              <br />
              vs. The Other Guys
            </h2>
            <div className="compare-grid">
              <div className="compare-col dark">
                <div className="compare-col-header">
                  <Image
                    className="compare-col-img"
                    src="/private-equity-illustration.png"
                    alt="Private Equity"
                    width={120}
                    height={120}
                    style={{ filter: 'brightness(0.7)' }}
                  />
                  <span className="compare-col-title">Private Equity</span>
                </div>
                {peItems.map(([good, label]) => (
                  <div className="compare-item" key={label}>
                    {good ? <Check dark /> : <Cross />}
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="compare-col light">
                <div className="compare-col-header" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                  <Image
                    className="compare-col-img"
                    src="/holter-illustration.png"
                    alt="Holter Holdings"
                    width={120}
                    height={120}
                  />
                  <span className="compare-col-title">Holter Holdings</span>
                </div>
                {holterItems.map((label) => (
                  <div className="compare-item" key={label}>
                    <Check dark={false} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Investment Criteria */}
        <section className="section" style={{ paddingTop: 80 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="section-label">Investment Criteria</p>
            <h2 className="section-h2" style={{ marginBottom: 52 }}>
              What we look for
              <br />
              in a business
            </h2>
            <div className="criteria-grid">
              {criteria.map((item) => (
                <div className="criteria-item" key={item.title}>
                  <Image className="criteria-img" src={item.img} alt={item.title} width={44} height={44} />
                  <div className="criteria-title">{item.title}</div>
                  <div className="criteria-sub">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-section">
          <h2 className="cta-h2">
            Think you might
            <br />
            be a <em>fit?</em>
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
