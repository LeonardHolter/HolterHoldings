'use client';

import Link from 'next/link';

export default function Leadership() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            HOLTER HOLDINGS
          </h1>
          <p className="text-sm text-black">
            Leadership Team
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

        {/* Leadership Content */}
        <div className="text-sm space-y-8">
          <div>
            <h3 className="font-bold text-black mb-3 text-base">Leonard Holter</h3>
            <p className="text-gray-600 text-xs mb-3">Founder & Managing Partner</p>
            <p className="text-black mb-3">
              Originally from Norway, Leonard founded Holter Holdings in 2025 with the vision 
              of building a portfolio of businesses designed to endure across generations. 
              As the firm expands into the United States, Leonard brings a unique perspective 
              that bridges European and American business traditions.
            </p>
            <p className="text-black">
              Leonard is currently studying Philosophy at Columbia University, where he combines 
              academic rigor with entrepreneurial ambition. His philosophical training informs 
              his approach to long-term value creation and ethical business practices.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="font-bold text-black mb-3">Investment Committee</h3>
            <p className="text-black">
              Our investment decisions are guided by a disciplined committee process that 
              evaluates each opportunity against our centuries-focused criteria. The committee 
              brings together decades of combined experience in identifying and building 
              enduring businesses.
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
