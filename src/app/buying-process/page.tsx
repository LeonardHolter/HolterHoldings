import Link from 'next/link';

export const metadata = {
  title: 'Our Buying Process — Holter Holdings',
};

const steps = [
  {
    num: '01',
    title: 'You reach out',
    body: 'Send us an email or give us a call. Tell us a little about your business — what you do, roughly how large it is, and why you\'re thinking about selling. No deck required. No banker needed. Just a conversation between owners.',
  },
  {
    num: '02',
    title: 'We give you a straight answer quickly',
    body: 'Buffett famously made acquisition decisions in a matter of hours — sometimes the same day. We operate the same way. Within a week of our first conversation, we\'ll tell you plainly whether we\'re interested and what a deal might look like. No stringing you along.',
  },
  {
    num: '03',
    title: 'A simple letter of intent',
    body: 'If there\'s a fit, we send a short, plain-English letter of intent. The terms are what they are — no games, no bait-and-switch. What we agree to on the handshake is what shows up in the documents. We don\'t re-trade.',
  },
  {
    num: '04',
    title: 'Light due diligence',
    body: 'We\'re not trying to find reasons to chip the price. We\'re confirming what you told us and building the foundation of a long relationship. We move fast, ask focused questions, and respect your time. Most diligence is done in two to three weeks.',
  },
  {
    num: '05',
    title: 'We close and get out of your way',
    body: 'Cash wired. Deal done. And then — nothing. We don\'t install new management, rebrand the company, or force your team into weekly reporting calls. You built something good. We\'re here to protect it, not tinker with it.',
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
        <p className="doc-date">Five steps. No surprises.</p>

        <div className="doc-body">
          <p>
            Most business sales are miserable. Months of negotiations, armies of lawyers, founders
            locked in earnouts, and a final price that barely resembles the original offer.
            We built our process around a simple question: <em>what would it look like if the
            buyer actually respected the seller?</em>
          </p>
          <p>
            Warren Buffett showed that it was possible to do billion-dollar deals on a handshake,
            close in weeks, and leave great businesses completely alone afterward. We apply that
            same logic to the companies we acquire — just at a smaller scale.
          </p>
        </div>

        <div className="process-steps-list">
          {steps.map((step) => (
            <div key={step.num} className="process-step-row">
              <div className="process-step-num">{step.num}</div>
              <div className="process-step-content">
                <div className="process-step-title">{step.title}</div>
                <p className="process-step-body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="doc-body" style={{ marginTop: 64 }}>
          <p>
            The whole thing — from first conversation to cash in your account — can happen in
            thirty days. It has. We prefer it that way. Long processes are expensive, exhausting,
            and bad for your team morale. Let&apos;s just get it done.
          </p>
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
