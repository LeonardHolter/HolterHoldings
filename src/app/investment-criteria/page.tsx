'use client';

import Link from 'next/link';

export default function InvestmentCriteria() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            HOLTER HOLDINGS
          </h1>
          <p className="text-sm text-black">
            Investment Criteria
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
            We apply rigorous criteria when evaluating potential investments, guided by 
            our fundamental belief in acquiring businesses built to last centuries.
          </p>

          <div>
            <h3 className="font-bold text-black mb-3">Business Quality</h3>
            <ul className="space-y-2 text-black">
              <li>• Strong competitive moats and barriers to entry</li>
              <li>• Predictable, recurring revenue streams</li>
              <li>• Pricing power in their respective markets</li>
              <li>• Capital-light business models with high returns on invested capital</li>
              <li>• Businesses that serve fundamental, enduring human needs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">Management Excellence</h3>
            <ul className="space-y-2 text-black">
              <li>• Proven track record of operational excellence</li>
              <li>• Long-term strategic vision aligned with our philosophy</li>
              <li>• Strong corporate governance and ethical standards</li>
              <li>• Commitment to building lasting value, not short-term gains</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">Financial Profile</h3>
            <ul className="space-y-2 text-black">
              <li>• Consistent profitability across economic cycles</li>
              <li>• Strong cash generation and balance sheet</li>
              <li>• Reasonable valuation relative to long-term potential</li>
              <li>• Typically $10M+ in annual revenue</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">Strategic Fit</h3>
            <p className="text-black">
              Beyond financial metrics, we seek businesses that align with our patient capital 
              approach and benefit from our operational expertise. We prefer to be long-term 
              partners rather than short-term financial sponsors.
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
