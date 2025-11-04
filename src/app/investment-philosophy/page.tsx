'use client';

import Link from 'next/link';

export default function InvestmentPhilosophy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            HOLTER HOLDINGS
          </h1>
          <p className="text-sm text-black">
            Investment Philosophy
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

        {/* Philosophy Content */}
        <div className="text-sm space-y-6">
          <div className="text-center py-8">
            <p className="text-xl font-bold text-black italic">
              &ldquo;We buy businesses that will last centuries.&rdquo;
            </p>
          </div>
          
          <p className="text-black">
            Our investment philosophy is built on the fundamental belief that truly great businesses 
            are designed to endure across generations. We seek companies with enduring competitive 
            advantages, timeless business models, and the potential to compound value over decades.
          </p>
          
          <p className="text-black">
            Rather than chasing short-term gains, we focus on acquiring businesses that possess 
            the characteristics necessary to thrive through economic cycles, technological changes, 
            and evolving market conditions.
          </p>

          <div className="pt-4">
            <h3 className="font-bold text-black mb-3">Key Principles:</h3>
            <ul className="space-y-2 text-black">
              <li>• Exceptional durability and competitive moats</li>
              <li>• Predictable, recurring revenue streams</li>
              <li>• Strong management teams with long-term vision</li>
              <li>• Businesses that serve fundamental human needs</li>
              <li>• Companies with pricing power and scalability</li>
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
