import Link from 'next/link';

export const metadata = {
  title: 'Contact - Holter Holdings',
};

export default function ContactPage() {
  return (
    <div className="container">
      <div className="doc-page" style={{ maxWidth: 600 }}>
        <div className="doc-back">
          <Link href="/">← Holter Holdings</Link>
        </div>

        <h1 className="doc-title">Contact</h1>
        <p className="doc-date">The fastest way to reach us.</p>

        <div className="doc-body">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:Leonard@holterholdings.com">Leonard@holterholdings.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+19296261703">929 626 1703</a>
          </p>
          <p>
            <strong>Mail:</strong> New York, NY 10027
          </p>
        </div>
      </div>
    </div>
  );
}
