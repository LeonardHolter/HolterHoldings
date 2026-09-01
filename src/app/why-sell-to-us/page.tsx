import Link from 'next/link';

export const metadata = {
  title: 'Why Sell to Us - Holter Holdings',
  description:
    'We buy generator companies and hold them forever. A fair offer in a week, your techs and dealer agreement intact, and no plan to ever sell.',
};

const principles = [
  {
    title: 'We only buy generator companies',
    body: "You will not have to explain what a transfer switch is, why a PM contract is worth more than an install, or what happens to your margins when the storm season is quiet. We buy in one industry, so diligence is a conversation between people who already speak the same language.",
  },
  {
    title: 'We never sell',
    body: "Once we buy a company, it is home. No flip, no recap, no exit. Your name stays on the trucks and your customers keep calling the same number.",
  },
  {
    title: 'Your techs and your dealership stay',
    body: "We do not clean house after closing. Your service techs, your dispatcher, and your factory dealer agreement are the business - cutting them would destroy the thing we just paid for.",
  },
  {
    title: 'A fair price, fast',
    body: "We don't grind. We make a fair offer quickly, in plain English, and we stick to it. What we agree on is what shows up in the documents.",
  },
  {
    title: 'Honest, capable people',
    body: 'We back leaders we trust. Honesty matters more to us than credentials. We believe great businesses are run by people who keep their word.',
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
        <p className="doc-date">We buy generator companies and hold them forever.</p>

        <div className="doc-body">
          <p>
            Most buyers treat selling a business like a transaction. We treat it like a handshake.
            Selling to us means your company finds a permanent home, run by people who care, with
            no plan to ever sell it again.
          </p>
          <p>
            The difference between us and a generalist buyer is simple: generators are all we do.
            We are not learning your industry on your time, and we are not pricing in the risk of
            what we do not understand.
          </p>
          <p>
            We borrow the rest of our approach from Warren Buffett: buy simple businesses, back
            honest people, pay a fair price quickly, and leave them alone afterward.
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
            Thinking about selling your generator business?
          </p>
          <a href="mailto:Leonard@holterholdings.com" className="cta-link">
            Leonard@holterholdings.com →
          </a>
        </div>
      </div>
    </div>
  );
}
