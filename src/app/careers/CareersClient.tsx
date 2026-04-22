import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { ArrowRight } from '@/components/Icons';

export default function CareersClient() {
  return (
    <>
      <Nav />
      <div className="page">
        <div className="careers-doc">
          <span className="careers-tag">Now Hiring</span>
          <h1 className="careers-role">
            Private Equity
            <br />
            Intern
          </h1>
          <div className="careers-meta">
            <div className="careers-meta-item">
              <span className="careers-meta-label">Location</span>
              <span className="careers-meta-val">Remote / Flexible</span>
            </div>
            <div className="careers-meta-item">
              <span className="careers-meta-label">Type</span>
              <span className="careers-meta-val">Part-time · Internship</span>
            </div>
            <div className="careers-meta-item">
              <span className="careers-meta-label">Compensation</span>
              <span className="careers-meta-val">Paid</span>
            </div>
          </div>

          <h3 className="careers-h3">About the role</h3>
          <p className="careers-p">
            We&apos;re a lean, founder-led holding company that buys and operates great service businesses. We move
            fast, speak plainly, and do real work — no make-work projects, no 200-slide decks nobody reads.
          </p>
          <p className="careers-p">
            As a Private Equity Intern at Holter Holdings, you&apos;ll work directly with our deal team across
            origination, diligence, and portfolio management. This is a high-ownership role — you&apos;ll have real
            responsibilities from day one.
          </p>

          <h3 className="careers-h3">What you&apos;ll do</h3>
          <ul className="careers-list">
            <li>Support deal origination: research industries, identify acquisition targets, and reach out to founders</li>
            <li>Build financial models and analyze business performance across potential acquisitions</li>
            <li>Assist with due diligence — reviewing financials, customer data, and operational metrics</li>
            <li>Prepare investment memos and summaries for leadership review</li>
            <li>Track and manage our deal pipeline and CRM</li>
            <li>Support portfolio companies on ad-hoc operational and financial projects</li>
          </ul>

          <h3 className="careers-h3">What we&apos;re looking for</h3>
          <ul className="careers-list">
            <li>Undergraduate or graduate student studying finance, business, economics, or a related field</li>
            <li>Strong analytical skills and comfort working with financial statements</li>
            <li>Self-starter who can take direction and run with it — we don&apos;t micromanage</li>
            <li>Clear, direct communicator — in writing and in meetings</li>
            <li>Genuine interest in small business, acquisition entrepreneurship, or the trades</li>
            <li>Bonus: experience in a small business or startup environment</li>
          </ul>

          <h3 className="careers-h3">Why Holter Holdings</h3>
          <p className="careers-p">
            You won&apos;t spend six months building pitch decks for deals that never close. You&apos;ll see real
            businesses, real numbers, and real decisions — and you&apos;ll have a hand in them. We&apos;re small enough
            that your work matters and big enough that there&apos;s always something interesting to do.
          </p>
          <p className="careers-p">
            We&apos;re straight shooters. We&apos;ll tell you what we think, give you real feedback, and treat you like
            an adult.
          </p>

          <div style={{ marginTop: 52, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: 14, color: 'var(--fg2)', marginBottom: 20 }}>
              To apply, send a short note about yourself and why you&apos;re interested — no need for a formal cover
              letter.
            </p>
            <a href="mailto:Leonard@holterholdings.com" className="btn-primary">
              Apply now <ArrowRight />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
