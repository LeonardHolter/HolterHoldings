import Link from 'next/link';

export const metadata = {
  title: 'Investment Criteria - Holter Holdings',
};

const criteria = [
  {
    title: 'A business you can understand in five minutes',
    body: 'Buffett\'s first rule: never buy what you can\'t explain. We look for businesses with simple, durable models - service companies, recurring-revenue operations, businesses that solve an obvious problem for a clear customer. If the business requires a forty-slide deck to explain, it\'s probably not for us.',
  },
  {
    title: 'Consistent earnings over time',
    body: 'We want to see a track record, not a projection. Three or more years of stable or growing earnings tells us the business is real, the customers keep coming back, and the owner isn\'t relying on one lucky contract. We\'re buying history, not forecasts.',
  },
  {
    title: '$500K to $3M in annual profit',
    body: 'This is our target range. Big enough that the business has real infrastructure and doesn\'t depend on one person doing everything, small enough that we can move fast and pay a fair price without a committee and six months of process.',
  },
  {
    title: 'Strong margins',
    body: 'Healthy margins are a signal. They mean the business has pricing power, loyal customers, and some kind of advantage competitors haven\'t been able to copy. Thin margins mean fragility. We prefer businesses where the owner doesn\'t have to fight for every dollar.',
  },
  {
    title: 'Something that\'s hard to replicate',
    body: 'A local brand with twenty years of trust. A niche so specific that nobody else bothers. A team culture that makes people stay for a decade. Buffett calls it a moat. Whatever form it takes, we want to see something that protects the business from a well-funded competitor deciding to move in.',
  },
  {
    title: 'Good people',
    body: 'We ask one question about management: are they honest? Not polished, not credentialed - honest. Buffett has said he won\'t do a deal with someone he doesn\'t trust, regardless of how attractive the numbers look. We feel the same way. The best businesses are run by people who take their word seriously.',
  },
  {
    title: 'Little to no debt',
    body: 'Debt turns a manageable problem into a crisis. We prefer businesses that generate cash freely and don\'t rely on leverage to survive a slow quarter. A clean balance sheet means the company can weather a hard year without everything unraveling.',
  },
];

export default function InvestmentCriteriaPage() {
  return (
    <div className="container">
      <div className="doc-page" style={{ maxWidth: 720 }}>
        <div className="doc-back">
          <Link href="/">← Holter Holdings</Link>
        </div>

        <h1 className="doc-title">Investment Criteria</h1>
        <p className="doc-date">Updated April 2026</p>

        <div className="doc-body">
          <p>
            We follow one framework: buy a wonderful business at a fair price, and hold it forever.
            That is Warren Buffett&apos;s thesis, and after decades of evidence it remains the
            simplest and most durable approach to owning companies.
          </p>
          <p>
            We are not financial engineers. We don&apos;t buy businesses to cut costs, load them
            with debt, and sell them three years later at a profit. We buy businesses because we
            believe in what they do and want to own them for a very long time. That changes what
            we look for.
          </p>
        </div>

        <div className="criteria-list">
          {criteria.map((item, i) => (
            <div key={i} className="criteria-row">
              <div className="criteria-row-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="criteria-row-content">
                <div className="criteria-row-title">{item.title}</div>
                <p className="criteria-row-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="doc-body" style={{ marginTop: 64 }}>
          <p>
            We don&apos;t require every box to be checked. A business that scores well on five of
            these and has a clear reason for the gaps is worth a conversation. What we won&apos;t
            compromise on: honesty, a real track record, and something worth protecting.
          </p>
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--rule)' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink3)', marginBottom: 16 }}>
            Think you might be a fit?
          </p>
          <a href="mailto:Leonard@holterholdings.com" className="cta-link">
            Leonard@holterholdings.com →
          </a>
        </div>
      </div>
    </div>
  );
}
