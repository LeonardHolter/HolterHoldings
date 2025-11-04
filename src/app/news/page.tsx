'use client';

import Link from 'next/link';

export default function News() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            HOLTER HOLDINGS
          </h1>
          <p className="text-sm text-black">
            News & Updates
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
          <div>
            <h3 className="font-bold text-black mb-2">2025 Updates</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-xs mb-1">January 2025</p>
                <p className="text-black">
                  Holter Holdings continues to evaluate exceptional businesses aligned 
                  with our centuries-focused investment philosophy. We remain committed 
                  to building a portfolio of enduring enterprises.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">Investment Activity</h3>
            <p className="text-black">
              We maintain a disciplined approach to new investments, focusing on quality 
              over quantity. Each potential acquisition undergoes rigorous evaluation 
              against our core criteria for business durability and long-term value creation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">Portfolio Development</h3>
            <p className="text-black">
              Our existing portfolio companies continue to benefit from our patient capital 
              approach and operational support, positioning them for sustainable growth 
              across market cycles.
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
