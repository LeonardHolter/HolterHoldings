'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            HOLTER HOLDINGS
          </h1>
          <p className="text-sm text-black">
            New York, NY 10001<br />
            Official Home Page
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <a href="/about" className="text-blue-700 underline hover:text-blue-900">
                About Holter Holdings
              </a>
            </div>
            
            <div>
              <a href="/investment-philosophy" className="text-blue-700 underline hover:text-blue-900">
                Investment Philosophy
              </a>
            </div>
            
            <div>
              <a href="/portfolio" className="text-blue-700 underline hover:text-blue-900">
                Portfolio Companies
              </a>
            </div>
            
            <div>
              <a href="/leadership" className="text-blue-700 underline hover:text-blue-900">
                Leadership Team
              </a>
            </div>
            
            <div>
              <a href="/contact" className="text-blue-700 underline hover:text-blue-900">
                Contact Information
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <a href="/investor-relations" className="text-blue-700 underline hover:text-blue-900">
                Investor Relations
              </a>
            </div>
            
            <div>
              <a href="/news" className="text-blue-700 underline hover:text-blue-900">
                News & Updates
              </a>
            </div>
            
            <div>
              <a href="/annual-letters" className="text-blue-700 underline hover:text-blue-900">
                Annual Letters to Partners
              </a>
            </div>
            
            <div>
              <a href="/investment-criteria" className="text-blue-700 underline hover:text-blue-900">
                Investment Criteria
              </a>
            </div>
            
            <div>
              <a href="/careers" className="text-blue-700 underline hover:text-blue-900">
                Career Opportunities
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-400 text-xs text-gray-600">
          <p className="mb-4">
            If you have any comments about our website, you can write us at the address shown above. 
            However, due to the limited number of personnel in our corporate office, we are unable to provide a direct response.
          </p>
          <p>
            Copyright © 2005-2024 <strong>Holter Holdings</strong>
          </p>
        </div>

      </div>
    </div>
  );
}