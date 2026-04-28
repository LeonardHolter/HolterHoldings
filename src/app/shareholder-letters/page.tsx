import Link from 'next/link';

export const metadata = {
  title: 'Shareholder Letters - Holter Holdings',
};

export default function ShareholderLettersPage() {
  return (
    <div className="container">
      <div className="doc-page" style={{ maxWidth: 720 }}>
        <div className="doc-back">
          <Link href="/">← Holter Holdings</Link>
        </div>

        <h1 className="doc-title">Shareholder Letters</h1>
        <p className="doc-date">Coming soon</p>
      </div>
    </div>
  );
}
