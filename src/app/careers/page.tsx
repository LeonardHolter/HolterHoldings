'use client';

import Link from 'next/link';

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            HOLTER HOLDINGS
          </h1>
          <p className="text-sm text-black">
            Career Opportunities
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
            Holter Holdings is built on the principle of long-term thinking and disciplined 
            execution. We seek exceptional individuals who share our commitment to building 
            businesses that will endure across generations.
          </p>

          <div>
            <h3 className="font-bold text-black mb-3">Our Culture</h3>
            <p className="text-black mb-3">
              We maintain a small, focused team where every person contributes meaningfully 
              to our mission. Our culture emphasizes intellectual curiosity, rigorous analysis, 
              and patient capital deployment.
            </p>
            <p className="text-black">
              Team members work directly with senior leadership on all aspects of the 
              investment process, from deal sourcing through portfolio management.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">What We Look For</h3>
            <ul className="space-y-2 text-black">
              <li>• Strong analytical and problem-solving abilities</li>
              <li>• Long-term orientation and patience in building value</li>
              <li>• Experience in finance, consulting, or operations</li>
              <li>• Entrepreneurial mindset with attention to detail</li>
              <li>• Commitment to our investment philosophy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">Current Opportunities</h3>
            <p className="text-black mb-3">
              While we don't currently have open positions, we're always interested in 
              meeting exceptional candidates who align with our philosophy and approach.
            </p>
            <p className="text-black">
              Interested candidates should send their resume and a brief note explaining 
              their interest in long-term value creation to our general inquiries address.
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
