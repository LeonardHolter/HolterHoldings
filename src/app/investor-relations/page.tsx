'use client';

import Link from 'next/link';

export default function InvestorRelations() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            HOLTER HOLDINGS
          </h1>
          <p className="text-sm text-black">
            Investor Relations
          </p>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/"
            className="text-blue-700 underline hover:text-blue-900 text-sm"
          >
            ← Back to Home Page
          </Link>
        </div>

        {/* Content */}
        <div className="text-sm space-y-6">
          <p className="text-black">
            Holter Holdings is a private investment firm focused on building long-term 
            partnerships with our investors and portfolio companies.
          </p>

          <div>
            <h3 className="font-bold text-black mb-3">For Current Investors</h3>
            <p className="text-black mb-3">
              Our current investors receive regular updates on portfolio performance, 
              strategic developments, and market insights through quarterly reports 
              and annual meetings.
            </p>
            <p className="text-black">
              All investor communications are distributed through secure channels. 
              If you need access to investor materials, please contact us directly.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">For Prospective Investors</h3>
            <p className="text-black mb-3">
              We selectively work with institutional investors and qualified individuals 
              who share our long-term investment philosophy and commitment to building 
              businesses that will last centuries.
            </p>
            <p className="text-black">
              Investment opportunities are offered by invitation only and subject to 
              significant minimum investment requirements.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-400 text-xs text-gray-600">
          <p>
            Copyright © 2025 <strong>Holter Holdings</strong>
          </p>
        </div>

      </div>
    </div>
  );
}
