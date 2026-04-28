import Link from 'next/link';

export const metadata = {
  title: 'Our Buying Process - Holter Holdings',
};

const principles = [
  {
    num: '01',
    title: 'Speak plainly',
    body: "Don't waste people's time. We speak plainly: no BS, buzzwords, or stupid finance terms.",
  },
  {
    num: '02',
    title: 'Protect culture',
    body: "Don't mess with the culture that makes each company unique.",
  },
  {
    num: '03',
    title: 'Avoid synergy',
    body: 'We leave all our businesses to operate independently and avoid synergy at all costs.',
  },
  {
    num: '04',
    title: 'Make founders proud',
    body: 'Founders entrust us with their companies. We do our best to follow through on their vision.',
  },
  {
    num: '05',
    title: 'No assholes',
    body: 'Life is too short for brilliant jerks, assholes, suck ups, psychopaths, narcissists, and all that stuff...',
  },
  {
    num: '06',
    title: 'Leave people alone',
    body: 'We buy great companies, hire great leaders, and leave them to do their thing.',
  },
];

export default function BuyingProcessPage() {
  return (
    <div className="container">
      <div className="doc-page" style={{ maxWidth: 720 }}>
        <div className="doc-back">
          <Link href="/">← Holter Holdings</Link>
        </div>

        <h1 className="doc-title">Our Buying Process</h1>
        <p className="doc-date">Six principles. No surprises.</p>

        <div className="process-steps-list">
          {principles.map((p) => (
            <div key={p.num} className="process-step-row">
              <div className="process-step-num">{p.num}</div>
              <div className="process-step-content">
                <div className="process-step-title">{p.title}</div>
                <p className="process-step-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--rule)' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink3)', marginBottom: 16 }}>
            Ready to start a conversation?
          </p>
          <a href="mailto:Leonard@holterholdings.com" className="cta-link">
            Leonard@holterholdings.com →
          </a>
        </div>
      </div>
    </div>
  );
}
