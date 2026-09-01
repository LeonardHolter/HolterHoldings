import Link from 'next/link';

export const metadata = {
  title: 'Investment Criteria - Holter Holdings',
  description:
    'What we look for in a generator business: standby and industrial power dealers, installers, and service companies with $500K to $3M in annual profit.',
};

const criteria = [
  {
    title: 'Generators are the whole business',
    body: "We buy in one industry and only one. At least three quarters of your revenue should come from generators - selling them, installing them, servicing them, or renting them. A shop that does a little of everything and some standby work on the side is a fine business, it is just not ours.",
  },
  {
    title: 'Service revenue that renews',
    body: "Installs pay the bills; maintenance agreements build the company. We look for a book of PM contracts, load bank testing, remote monitoring, and fuel polishing that comes back every year whether or not the phone rings after a storm. The bigger that base, the better the business.",
  },
  {
    title: 'Consistent earnings over time',
    body: "We want to see a track record, not a projection. Three or more years of stable or growing earnings tells us the business is real and the customers keep coming back. In this industry that also means we can see through the outlier years - the hurricane, the ice storm, the grid event that doubled a quarter.",
  },
  {
    title: '$500K to $3M in annual profit',
    body: "This is our target range. Big enough that the business has real infrastructure - a dispatcher, a parts room, more than one crew - and small enough that we can move fast and pay a fair price without a committee and six months of process.",
  },
  {
    title: 'Technicians who stay',
    body: "A generator company is its service techs. Factory-trained people who can diagnose a controller fault, a fuel issue, and a transfer switch failure on the same call are the hardest thing in this industry to replace. Low turnover and an apprentice or two coming up behind them tells us more than any spreadsheet.",
  },
  {
    title: 'Dealer relationships that transfer',
    body: "Generac, Kohler, Cummins, Briggs, Kubota - an authorized dealership, a warranty account in good standing, and a territory nobody is trying to take from you are real assets. We check early that they survive a change of ownership, because that is usually the one thing that can break a deal late.",
  },
  {
    title: 'Good people',
    body: "We ask one question about management: are they honest? Not polished, not credentialed - honest. Buffett has said he will not do a deal with someone he does not trust, regardless of how attractive the numbers look. We feel the same way.",
  },
  {
    title: 'Little to no debt',
    body: "Debt turns a manageable problem into a crisis. We prefer businesses that generate cash freely and do not lean on a line of credit to carry inventory through a slow quarter. A clean balance sheet means the company can absorb a quiet storm season without everything unraveling.",
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
            We buy generator businesses. Standby, prime, and portable power - the dealers,
            installers, service shops, and rental fleets that keep the lights on. That is the
            entire universe we shop in, and we are not looking to expand it.
          </p>
          <p>
            Within that industry we follow one framework: buy a wonderful business at a fair price,
            and hold it forever. That is Warren Buffett&apos;s thesis, and after decades of evidence
            it remains the simplest and most durable approach to owning companies.
          </p>
          <p>
            We are not financial engineers. We don&apos;t buy businesses to cut costs, load them
            with debt, and sell them three years later at a profit. We buy generator companies
            because we understand them and want to own them for a very long time. That changes what
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
            We don&apos;t require every box to be checked. A generator business that scores well on
            five or six of these and has a clear reason for the gaps is worth a conversation. What
            we won&apos;t compromise on: the industry, honesty, and a real track record.
          </p>
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--rule)' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink3)', marginBottom: 16 }}>
            Own a generator business?
          </p>
          <a href="mailto:Leonard@holterholdings.com" className="cta-link">
            Leonard@holterholdings.com →
          </a>
        </div>
      </div>
    </div>
  );
}
