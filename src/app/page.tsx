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

          <a href="/investment-criteria">
            <div className="ig-text">
              <div className="ig-title">Investment Criteria</div>
            </div>
            <svg className="ig-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a href="/buying-process">
            <div className="ig-text">
              <div className="ig-title">Our Buying Process</div>
            </div>
            <svg className="ig-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a href="/portfolio">
            <div className="ig-text">
              <div className="ig-title">Portfolio</div>
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
