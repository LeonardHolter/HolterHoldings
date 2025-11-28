'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold tracking-tight text-slate-900 hover:text-slate-700 transition-colors"
            >
            HOLTER HOLDINGS
            </button>
            
            {/* Nav Links */}
            <div className="flex gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  activeSection === 'about' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  activeSection === 'contact' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Building the Future of
            <br />
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              B2B Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A generational family office from Norway, now expanding across the United States 
            under the leadership of Leonard Holter. We buy to hold forever.
          </p>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-block px-8 py-4 bg-slate-900 text-white font-semibold text-sm tracking-wide rounded-lg hover:bg-slate-800 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            LET&apos;S TALK
          </button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Strategic Acquisitions
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We target established B2B services companies with proven business models, 
                strong customer relationships, and significant growth potential across the United States.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Operational Excellence
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We implement AI-driven efficiencies and best practices that dramatically improve 
                operations, reduce costs, and accelerate growth trajectories.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Permanent Capital
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We never sell. Once we acquire a company, it becomes part of the Holter Holdings 
                family forever. This is permanent capital with a generational time horizon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Bring Section */}
      <section className="py-32 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We Bring to the Table
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Generational capital, global networks, and modern expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Permanent Capital</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We never sell. True permanent capital from a Norwegian family office with a 
                    multi-generational time horizon. Your company becomes part of our family forever.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Ivy League & Global Network</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Access to elite talent, advisors, and strategic partners across the US and Europe, 
                    from America&apos;s leading institutions to Norwegian business circles.
                  </p>
                </div>
            </div>
            
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
            <div>
                  <h3 className="text-2xl font-bold mb-3">Operator Network</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Seasoned industry experts and former CEOs ready to roll up their sleeves 
                    and drive real operational improvements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
            <div>
                  <h3 className="text-2xl font-bold mb-3">AI & Technology Expertise</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Deep experience implementing AI solutions and modern technology 
                    that transform traditional businesses into efficiency powerhouses.
                  </p>
            </div>
          </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
            <div>
                  <h3 className="text-2xl font-bold mb-3">Efficiency Boosting</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Proven methodologies to streamline operations, reduce waste, 
                    and unlock hidden value through process optimization and automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Holter Holdings Section */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Leonard Holter Photo */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/leonard.jpg"
                  alt="Leonard Holter"
                  fill
                  className="object-cover object-[76%_center]"
                  priority
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2">
              <span className="inline-block px-4 py-2 bg-slate-100 text-slate-900 text-xs font-semibold tracking-widest rounded-full mb-6">
                GENERATIONAL LEGACY
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                A Norwegian Heritage, An American Future
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Holter Holdings is a generational family office with deep roots in Norway, 
                  where our family has built and managed successful enterprises for generations. 
                  Our approach to business is shaped by Nordic values: long-term thinking, 
                  operational discipline, and a commitment to sustainable growth.
                </p>
                
                <p>
                  Under the leadership of <span className="font-semibold text-slate-900">Leonard Holter</span>, 
                  we are now expanding our legacy into the United States, bringing decades of family 
                  office wisdom to the American B2B services market. Leonard combines the family&apos;s 
                  time-tested investment philosophy with Ivy League education and cutting-edge expertise 
                  in AI and operational transformation.
                </p>
                
                <p>
                  This unique combination of generational capital, Norwegian discipline, American innovation, 
                  and modern technology positions us differently than traditional private equity. 
                  <span className="font-semibold text-slate-900">We never sell our companies.</span> Every 
                  acquisition becomes a permanent part of the Holter Holdings family, built to last for 
                  generations, just as our family businesses have endured for decades.
                </p>
                
                <p>
                  Today, Holter Holdings partners with business owners who value more than just capital. 
                  They value a partner with multi-generational perspective, global connections, and the 
                  expertise to transform their business for the long term.
                </p>
                
                <p className="font-semibold text-slate-900">
                  From Norway to America. From generation to generation. Building businesses that endure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Start a Conversation
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a business owner considering a sale or an investor interested 
            in our approach, we&apos;d love to hear from you.
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-200">Location</h3>
                <p className="text-slate-300">
                  New York, NY 10027<br />
                  United States
                </p>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-200">Connect</h3>
                <p className="text-slate-300">
                  Email: <a href="mailto:Leonard@holterholdings.com" className="hover:text-white transition-colors underline">Leonard@holterholdings.com</a>
                </p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-slate-400">
                Holter Holdings is incorporated in Delaware. All inquiries are treated with strict confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            Copyright © 2025 <strong className="text-white">Holter Holdings</strong>. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}