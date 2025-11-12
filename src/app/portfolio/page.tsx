'use client';

import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            HOLTER HOLDINGS
          </h1>
          <p className="text-sm text-black">
            Portfolio Companies
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

        {/* Portfolio Content */}
        <div className="text-sm">
          <p className="mb-6 text-black">
            Our carefully curated portfolio of exceptional enterprises:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-700 pl-4 py-2">
              <p className="text-black font-semibold">
                Coming Soon
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Q1 2026
              </p>
            </div>
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
