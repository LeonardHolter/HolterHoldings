'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            HOLTER HOLDINGS
          </h1>
          <p className="text-sm text-black">
            About Our Firm
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

        {/* About Content */}
        <div className="text-sm space-y-6">
          <p className="text-black">
            Holter Holdings is a private investment firm founded in 2025 by Leonard Holter. 
            Based in New York, we focus on acquiring and building exceptional businesses 
            across diverse industries.
          </p>
          
          <p className="text-black">
            Our approach combines patient capital with operational expertise to help 
            companies achieve their full potential. We believe in long-term value creation 
            through disciplined investing and active partnership with management teams.
          </p>

          <div className="pt-4">
            <h3 className="font-bold text-black mb-3">Our Focus Areas:</h3>
            <ul className="space-y-2 text-black">
              <li>• Service-oriented businesses with recurring revenue</li>
              <li>• Companies with strong competitive positions</li>
              <li>• Businesses with opportunities for operational improvement</li>
              <li>• Enterprises with proven management teams</li>
            </ul>
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
