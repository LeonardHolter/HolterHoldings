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
              
              {/* Heritage Statement */}
              <div className="text-center">
                <p className="text-primary text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0">
                  Founded in the majestic fjords of Norway, Holter Holdings has been the trusted steward 
                  of generational wealth for distinguished Nordic families for over a decade.
                </p>
                
                <div className="section-break"></div>
                
                <p className="text-primary text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0">
                  Now gracefully expanding our legacy of discretion and excellence 
                  to serve the most discerning American families.
                </p>
              </div>

              <div className="section-break"></div>

              {/* Leadership Section */}
              <div>
                <h2 className="font-heading text-xl sm:text-2xl text-primary text-center underline-elegant">
                  Leadership
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
                  <div className="text-center">
                    <h3 className="font-heading text-lg sm:text-xl text-primary mb-2">
                      Leonard Holter
                    </h3>
                    <p className="text-secondary text-xs sm:text-sm uppercase tracking-wider">
                      Managing Partner
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-heading text-lg sm:text-xl text-primary mb-2">
                      Edward Holter
                    </h3>
                    <p className="text-secondary text-xs sm:text-sm uppercase tracking-wider">
                      Partner
                    </p>
                    <p className="text-secondary text-xs italic mt-1">
                      Father
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
