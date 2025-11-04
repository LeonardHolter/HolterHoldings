'use client';

import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            HOLTER HOLDINGS
          </h1>
          <p className="text-sm text-black">
            Contact Information
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

        {/* Contact Content */}
        <div className="text-sm space-y-6">
          <div>
            <h3 className="font-bold text-black mb-3">Corporate Headquarters</h3>
            <p className="text-black">
              Holter Holdings<br/>
              New York, NY 10027<br/>
              United States
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">General Inquiries</h3>
            <p className="text-black">
              leonard@holterholdings.com
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">Investment Opportunities</h3>
            <p className="text-black mb-3">
              We are always interested in hearing about exceptional businesses that 
              align with our investment philosophy. If you believe your company could 
              benefit from our patient capital approach, please reach out.
            </p>
            <p className="text-black">
              Due to the volume of inquiries we receive, we are only able to respond 
              to opportunities that fit our investment criteria.
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
