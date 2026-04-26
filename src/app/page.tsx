export default function Home() {
  return (
    <div className="container">

      <h1 className="brand-title">Holter Holdings</h1>

      {/* Hero */}
      <section className="hero">
        <h1>We buy great companies, and hold them <em>forever.</em></h1>
        <p>We never sell and we never change something that is working.</p>
      </section>

      {/* Official Index */}
      <section className="section">
        <div className="section-h">
          <div className="label">
            <span className="num">i.</span> Official Index
          </div>
          <div className="meta">Updated April 2026</div>
        </div>

        <div className="index-grid">

          <a href="#shareholder-letters">
            <div className="ig-text">
              <div className="ig-title">Shareholder Letters</div>
              <div className="ig-meta">Coming soon</div>
            </div>
            <svg className="ig-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a href="#investment-criteria">
            <div className="ig-text">
              <div className="ig-title">Investment Criteria</div>
              <div className="ig-meta">Updated April 2026</div>
            </div>
            <svg className="ig-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a href="#our-process">
            <div className="ig-text">
              <div className="ig-title">Our Buying Process</div>
              <div className="ig-meta">Five steps. No surprises.</div>
            </div>
            <svg className="ig-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a href="#leadership">
            <div className="ig-text">
              <div className="ig-title">Leadership Team</div>
              <div className="ig-meta">Operators first, investors second</div>
            </div>
            <svg className="ig-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="foot">
        <div className="foot-legal">
          <span className="foot-contact">
            Contact: <a href="tel:+19296261703">929 626 1703</a>
            &nbsp;·&nbsp; New York, NY 10027
          </span>
          <span>
            <a href="/legal">Legal Disclaimer</a>
            {' · '}
            <a href="/privacy">Privacy</a>
          </span>
        </div>
      </footer>

    </div>
  );
}
