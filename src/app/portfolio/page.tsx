import Link from 'next/link';

export const metadata = {
  title: 'Portfolio — Holter Holdings',
};

const companies = [
  {
    name: 'Powerwash-nyc',
    url: 'https://www.powerwash-nyc.com/',
    description: 'Professional power washing and exterior cleaning services across New York City.',
  },
  {
    name: 'Zkypee',
    url: 'https://zkypee.com',
    description: 'A modern platform built for the next generation of service businesses.',
  },
];

export default function PortfolioPage() {
  return (
    <div className="container">
      <div className="doc-page" style={{ maxWidth: 820 }}>
        <div className="doc-back">
          <Link href="/">← Holter Holdings</Link>
        </div>

        <h1 className="doc-title">Portfolio</h1>
        <p className="doc-date">Our companies</p>

        <div className="portfolio-list">
          {companies.map((co) => (
            <a
              key={co.name}
              href={co.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-row"
            >
              <div className="portfolio-row-text">
                <div className="portfolio-row-name">{co.name}</div>
                <div className="portfolio-row-desc">{co.description}</div>
              </div>
              <svg className="ig-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
