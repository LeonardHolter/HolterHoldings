'use client';

import Link from 'next/link';

export default function AnnualLetters() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            HOLTER HOLDINGS
          </h1>
          <p className="text-sm text-black">
            Annual Letters to Partners
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
            Each year, we share our thoughts on business, investing, and the markets 
            through our annual letter to partners. These letters reflect our long-term 
            perspective and commitment to building businesses that will endure across generations.
          </p>

          <div>
            <h3 className="font-bold text-black mb-3">Recent Letters</h3>
            <div className="space-y-3">
              <div>
                <p className="text-black font-semibold">2024 Annual Letter</p>
                <p className="text-gray-600 text-xs">Available to current partners</p>
              </div>
              <div>
                <p className="text-black font-semibold">2023 Annual Letter</p>
                <p className="text-gray-600 text-xs">Available to current partners</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">Letter Access</h3>
            <p className="text-black mb-3">
              Our annual letters contain detailed information about our investment activities, 
              portfolio performance, and strategic outlook. Access is limited to current 
              investment partners and qualified investors.
            </p>
            <p className="text-black">
              For access inquiries, please contact our investor relations team directly.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">Key Themes</h3>
            <p className="text-black">
              Our letters consistently emphasize our core belief: that the greatest investment 
              returns come from owning pieces of businesses that can compound value over decades, 
              not quarters. We focus on businesses built to last centuries, not years.
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
