import Link from 'next/link';

export const metadata = {
  title: 'Legal Disclaimer — Holter Holdings',
};

export default function LegalPage() {
  return (
    <div className="container">
      <div className="doc-page">
        <div className="doc-back">
          <Link href="/">← Holter Holdings</Link>
        </div>

        <h1 className="doc-title">Legal Disclaimer</h1>
        <p className="doc-date">Last updated April 2026</p>

        <div className="doc-body">
          <h2>No Offer or Solicitation</h2>
          <p>
            The information on this website is provided for general informational purposes only and does not constitute an offer to buy or sell securities, an investment recommendation, or a solicitation of any kind. Nothing on this site should be construed as financial, legal, or tax advice. You should consult your own advisors before making any investment or business decision.
          </p>

          <h2>Forward-Looking Statements</h2>
          <p>
            Certain statements on this website may be forward-looking in nature. These statements involve known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially from those expressed or implied. Holter Holdings makes no representation or warranty that any forward-looking statement will prove accurate.
          </p>

          <h2>No Guarantee of Results</h2>
          <p>
            Past performance of any acquisition, investment, or business outcome described on this site is not indicative of future results. All transactions involve risk, including the possible loss of principal.
          </p>

          <h2>Third-Party Content</h2>
          <p>
            This website may reference or link to third-party websites, publications, or sources. Holter Holdings does not endorse or take responsibility for the accuracy or content of any third-party material.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            While we make reasonable efforts to keep the information on this site current and accurate, we make no warranties or representations of any kind regarding the completeness, accuracy, or timeliness of the content. Information may change without notice.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Holter Holdings and its affiliates, officers, and employees shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information contained herein.
          </p>

          <h2>Governing Law</h2>
          <p>
            This disclaimer is governed by the laws of the State of New York, without regard to its conflict of law provisions.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this disclaimer, contact us at{' '}
            <a href="mailto:Leonard@holterholdings.com">Leonard@holterholdings.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
