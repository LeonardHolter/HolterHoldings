'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="document-center">
        <div className="document-container">
          <div className="p-6 sm:p-8 md:p-12">
            
            {/* Letterhead */}
            <div className="letterhead text-center">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-2 sm:mb-4">
                HOLTER HOLDINGS
              </h1>
              <p className="text-secondary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Established 2005
              </p>
            </div>

            {/* Document Body */}
            <div className="elegant-spacing">
              
              {/* Company Statement */}
              <div className="text-center">
                <p className="text-primary text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0">
                  Destined to be the largest holding company ever made.
                </p>
                <p className="text-primary text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0 mt-4">
                  $599
                </p>
              </div>

              <div className="section-break"></div>

              {/* Leadership Section */}
              <div>
                <h2 className="font-heading text-xl sm:text-2xl text-primary text-center underline-elegant">
                  Founder
                </h2>
                
                <div className="text-center mt-6 sm:mt-8">
                  <div>
                    <p className="text-lg sm:text-xl text-primary mb-2">
                      Leonard Holter
                    </p>
                  </div>
                </div>
              </div>

              <div className="section-break"></div>

              {/* Contact */}
              <div className="text-center">
                <h3 className="font-heading text-base sm:text-lg text-primary underline-elegant">
                  Correspondence
                </h3>
                <p className="text-secondary text-sm sm:text-base break-all sm:break-normal">
                  leonard@holterholdings.com
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
