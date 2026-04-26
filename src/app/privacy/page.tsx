import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Holter Holdings',
};

export default function PrivacyPage() {
  return (
    <div className="container">
      <div className="doc-page">
        <div className="doc-back">
          <Link href="/">← Holter Holdings</Link>
        </div>

        <h1 className="doc-title">Privacy Policy</h1>
        <p className="doc-date">Last updated April 2026</p>

        <div className="doc-body">
          <h2>What We Collect</h2>
          <p>
            When you contact us — by email, phone, or through any form on this site — we collect the information you voluntarily provide, such as your name, email address, phone number, and details about your business. We do not collect data through cookies, trackers, or analytics tools beyond basic server logs.
          </p>

          <h2>How We Use It</h2>
          <p>
            We use the information you send us solely to respond to your inquiry and, if relevant, to evaluate a potential business relationship. We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </p>

          <h2>Who Sees It</h2>
          <p>
            Your information is accessible only to members of the Holter Holdings team directly involved in evaluating or responding to your inquiry. We do not share it with outside parties unless required by law or necessary to complete a transaction you have agreed to.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain contact and inquiry information for as long as it is relevant to an active or potential transaction. If you would like your information removed from our records, contact us and we will honor that request promptly.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable precautions to protect your information. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security, but we treat your data with care.
          </p>

          <h2>External Links</h2>
          <p>
            This site may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to read their policies separately.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The date at the top of this page reflects when it was last revised. Continued use of this site after any changes constitutes your acceptance of the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Reach us at{' '}
            <a href="mailto:Leonard@holterholdings.com">Leonard@holterholdings.com</a>{' '}
            or call <a href="tel:+19296261703">929 626 1703</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
