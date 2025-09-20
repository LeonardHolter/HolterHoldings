'use client';

import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-paper relative">
      {/* Back Button - Top Left in White Space */}
      <Link 
        href="/"
        className="absolute top-4 left-4 text-xs text-black hover:text-gray-600 transition-colors z-10"
      >
        ← Back
      </Link>
      
      <div className="document-center">
        <div className="document-container">
          <div className="p-6 sm:p-8 md:p-12">
            
            {/* Letterhead */}
            <div className="letterhead text-center">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-2 sm:mb-4">
                PORTFOLIO
              </h1>
              <p className="text-secondary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Holdings & Investments
              </p>
            </div>

            {/* Document Body */}
            <div className="elegant-spacing">
              
              {/* Company Statement */}
              <div className="text-center">
                <p className="text-primary text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0">
                  Our carefully curated portfolio of exceptional enterprises.
                </p>
              </div>

              <div className="section-break"></div>

              {/* Holter Cleaning Section */}
              <div>
                <h2 className="font-heading text-xl sm:text-2xl text-primary text-center underline-elegant">
                  Portfolio Companies
                </h2>
                
                <div className="text-center mt-6 sm:mt-8">
                  <div>
                    <a 
                      href="https://www.holtercleaning.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg sm:text-xl text-primary hover:text-secondary transition-colors"
                    >
                      Holter Cleaning
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
