import Link from 'next/link';

export const metadata = {
  title: 'Why Sell to Us - Holter Holdings',
};

const principles = [
  {
    title: 'We never sell',
    body: "Once we buy a company, it's home. No flip, no recap, no exit. We commit to your business for the long haul.",
  },
  {
    title: 'Simple businesses we understand',
    body: "Buffett's first rule: only buy what you understand. We stick to durable service businesses with clear customers and steady cash flow.",
  },
  {
    title: 'Honest, capable people',
    body: 'We back leaders we trust. Honesty matters more to us than credentials. We believe great businesses are run by people who keep their word.',
  },
  {
    title: 'A fair price, fast',
    body: "We don't grind. We make a fair offer quickly, in plain English, and we stick to it. What we agree on is what shows up in the documents.",
  },
  {
    title: 'Hands-off ownership',
    body: "We don't install new managers, force integrations, or chase synergies. We hire great leaders and leave them to do their thing.",
  },
];

export default function WhySellToUsPage() {
  return (
    <div className="container">
      <div className="doc-page" style={{ maxWidth: 720 }}>
        <div className="doc-back">
          <Link href="/">← Holter Holdings</Link>
        </div>

        <h1 className="doc-title">Why Sell to Us</h1>
        <p className="doc-date">We buy great companies and hold them forever.</p>

        <div className="doc-body">
          <p>
            Most buyers treat selling a business like a transaction. We treat it like a handshake.
            Selling to us means your company finds a permanent home, run by people who care, with
            no plan to ever sell it again.
          </p>
          <p>
            We borrow our approach from Warren Buffett: buy simple businesses, back honest people,
            pay a fair price quickly, and leave them alone afterward.
          </p>
        </div>

        <div className="process-steps-list">
          {principles.map((p, i) => (
            <div key={p.title} className="process-step-row">
              <div className="process-step-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="process-step-content">
                <div className="process-step-title">{p.title}</div>
                <p className="process-step-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--rule)' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink3)', marginBottom: 16 }}>
            Thinking about selling?
          </p>
          <a href="mailto:Leonard@holterholdings.com" className="cta-link">
            Leonard@holterholdings.com →
          </a>
        </div>
      </div>
    </div>
  );
}
