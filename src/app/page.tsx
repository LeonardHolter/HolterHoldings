'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'philosophy', 'approach', 'criteria', 'team', 'contact'];
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
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'philosophy', label: 'About' },
    { id: 'approach', label: 'Approach' },
    { id: 'criteria', label: 'Investment Criteria' },
    { id: 'team', label: 'Team' },
  ];

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex flex-col items-start"
            >
              <span className={`text-sm tracking-[0.2em] uppercase font-medium transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Holter Holdings
              </span>
            </button>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wide transition-colors relative ${
                    isScrolled 
                      ? activeSection === item.id ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                      : activeSection === item.id ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled ? 'bg-slate-900' : 'bg-white'}`} />
                  )}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-sm font-medium text-slate-600 hover:text-slate-900 py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-center px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors mt-4"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 z-10" />
          <Image
            src="/fjords.jpeg"
            alt="Holter Holdings"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
        </div>
        
        <div className="relative z-20 max-w-5xl mx-auto text-center px-6 pt-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
            HOLTER HOLDINGS
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            Holter Holdings partners with family and founder-owned companies in the 
            lower middle market to optimize growth while preserving legacy. We bring patient 
            capital, <span className="font-semibold">Ivy League networks</span>, cutting-edge technology, 
            operational experience, and a <span className="font-semibold">&ldquo;hands-in&rdquo;</span> collaborative approach to help scale organizations.
          </p>
          
          <p className="text-xl md:text-2xl text-white font-semibold mb-12 max-w-3xl mx-auto">
            We never sell. We buy to hold forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('philosophy')}
              className="px-8 py-4 bg-slate-800/80 text-white font-medium text-sm tracking-wide rounded-md hover:bg-slate-700 transition-all border border-white/20"
            >
              Learn More
            </button>
          <button
            onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-slate-900 font-medium text-sm tracking-wide rounded-md hover:bg-slate-100 transition-all"
          >
              Get in Touch
          </button>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 bg-[#fdfcfa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              At Holter Holdings, we believe great companies are built through partnership, not ownership. We work 
              alongside founders and management teams to preserve what makes their business exceptional while unlocking new 
              growth avenues. Our philosophy centers on being thematically focused, combining long-term alignment, operational 
              experience, and disciplined partnership to build companies that endure and adapt for the future.
            </p>
          </div>
          
          {/* Top Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Integrity</h3>
              <p className="text-slate-600 leading-relaxed">
                Transparent collaboration built on trust and shared goals. We live up to our word and deliver on our promises.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Partnership</h3>
              <p className="text-slate-600 leading-relaxed">
                We work together to achieve more than we could on our own. Partnership above all else.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600 leading-relaxed">
                We seek continuous improvement and have a commitment to excellence through modern technology and AI.
              </p>
            </div>
          </div>
          
          {/* Bottom Row - 2 Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Permanent Capital</h3>
              <p className="text-slate-600 leading-relaxed">
                We deploy patient capital with straightforward structures focused on alignment and long-term growth. We never sell.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Discipline</h3>
              <p className="text-slate-600 leading-relaxed">
                We are focused on repeatable processes and use these goals to set ourselves accountable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach Section */}
      <section id="approach" className="py-24 px-6 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Investment Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our <span className="font-semibold">&ldquo;hands-in&rdquo;</span> approach reflects our belief that transformative outcomes come from active participation, not distant 
              oversight. We focus on growth-oriented businesses in the lower middle market where we can add the most value and 
              prepare the business for the next round of ownership. Our strategy is driven by focus and depth. We proactively 
              identify trends within essential service sectors and build platforms through organic growth and targeted M&A.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Thematically Driven</h3>
              <p className="text-slate-600 leading-relaxed">
                We concentrate on well-defined themes around essential services where we have a proven track record 
                of investing, targeting opportunities supported by durable macro and regulatory tailwinds.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Buy and Build</h3>
              <p className="text-slate-600 leading-relaxed">
                We amplify growth with targeted strategic acquisitions to build scaled, best-in-class platforms that create 
                meaningful equity value.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Proactive Execution</h3>
              <p className="text-slate-600 leading-relaxed">
                We are proactively building and calling directly to meet business owners where they are in their journey.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Operational Strength</h3>
              <p className="text-slate-600 leading-relaxed">
                Our &ldquo;hands-in&rdquo; approach enables us to add resources, technology, and leadership to drive sustainable value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Add Value Section */}
      <section className="py-24 px-6 bg-[#fdfcfa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              How We Add Value
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We work side by side with management to execute high-impact initiatives, enhance operations, and expand market 
              presence. Our <span className="font-semibold text-slate-900">Ivy League network from Columbia University</span> provides 
              unmatched access to elite talent, strategic advisors, and capital partners. We are nimble and support agile decision-making 
              for fast and effective execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Organic Growth</h3>
              <p className="text-slate-600 leading-relaxed">
                We help accelerate growth by strengthening go-to-market strategies, building teams, improving systems, 
                and enhancing data-driven decision-making.
                  </p>
                </div>
            
            <div className="bg-white p-10 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Acquisitions</h3>
              <p className="text-slate-600 leading-relaxed">
                We have a long history of executing growth through M&A. We will be involved in identifying, negotiating, and 
                integrating strategic acquisitions.
              </p>
              </div>
              
            <div className="bg-white p-10 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Talent</h3>
              <p className="text-slate-600 leading-relaxed">
                We have experience helping organizations build out their management teams and the next round of leaders.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Ivy League Network</h3>
              <p className="text-slate-600 leading-relaxed">
                Access to our extensive Columbia University and Ivy League network provides unparalleled advantages: 
                elite talent recruitment, strategic advisory from top-tier professionals, cutting-edge business insights, 
                and connections to capital partners and industry leaders who can accelerate growth.
                  </p>
                </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria Section */}
      <section id="criteria" className="py-24 px-6 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Investment Criteria
            </h2>
          </div>
          
          {/* Top Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">EBITDA</h3>
              <p className="text-slate-600">$500k–$3 million</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">Geography</h3>
              <p className="text-slate-600">United States</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">Deal Types</h3>
              <p className="text-slate-600">Recapitalizations, management buyouts, and platform builds</p>
            </div>
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">Industries</h3>
              <p className="text-slate-600">Facility services and professional services</p>
                </div>
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">Ownership</h3>
              <p className="text-slate-600">Majority preferred; minority considered selectively</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Sectors Section */}
      <section className="py-24 px-6 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Why We Like These Sectors
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our targeted industries share a combination of attractive characteristics that make them resilient, scalable, and 
              primed for value creation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4 text-center">Market Characteristics</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-slate-600 text-sm">Highly fragmented markets with significant opportunity for consolidation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-slate-600 text-sm">Asset-light business models with low cyclicality</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-slate-600 text-sm">Attractive end-market dynamics supported by macro tailwinds</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4 text-center">Business Qualities</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-slate-600 text-sm">Mission-critical service offerings</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-slate-600 text-sm">Recurring and reoccurring revenue models</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-slate-600 text-sm">Established customer relationships</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4 text-center">Investment Opportunity</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-slate-600 text-sm">Opportunity to professionalize operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-slate-600 text-sm">Ability to scale through organic growth and M&A</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-slate-600 text-sm">Value enhancement through scale and technology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="py-24 px-6 bg-[#fdfcfa]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Leadership
            </h2>
          </div>
          
          <div className="bg-white p-10 md:p-16 rounded-xl border border-slate-200">
            <div className="flex flex-col items-center mb-10">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-200 mb-6">
                <Image
                  src="/leonard.jpg"
                  alt="Leonard Holter"
                  width={160}
                  height={160}
                  className="object-cover object-[76%_center] w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">Leonard Holter</h3>
              <p className="text-lg text-slate-600">Founder</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Experience</h4>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      Holter Holdings is led by Leonard Holter, who brings a unique combination of Norwegian family office 
                      wisdom and modern innovation to the lower middle market.
                    </p>
                    <p>
                      Leonard combines the family&apos;s time-tested investment philosophy with Ivy League education and 
                      cutting-edge expertise in AI and operational transformation.
                    </p>
                    <p>
                      This unique combination of generational capital, Norwegian discipline, American innovation, and 
                      modern technology positions Holter Holdings differently than traditional private equity. We never 
                      sell our companies—every acquisition becomes a permanent part of the Holter Holdings family.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Education</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Columbia University graduate with deep operational experience in AI and technology transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#f8f6f2]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Contact Us
          </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We would love to hear from you! Contact via the form below.
            </p>
          </div>
          
          <div className="bg-white p-10 md:p-12 rounded-xl border border-slate-200">
            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8 text-center">Get In Touch</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div>
                <p className="text-sm text-slate-700 mb-3">I want to learn more about:</p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-slate-900 border-slate-300 rounded focus:ring-slate-900" />
                    <span className="text-slate-600">Partnership Opportunities</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-slate-900 border-slate-300 rounded focus:ring-slate-900" />
                    <span className="text-slate-600">Investing with Holter Holdings</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-slate-900 border-slate-300 rounded focus:ring-slate-900" />
                    <span className="text-slate-600">General Inquiry</span>
                  </label>
                </div>
            </div>
            
            <div>
                <textarea
                  placeholder="Message (optional)"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 transition-colors"
                >
                  Submit
                </button>
            </div>
            </form>
            
            <div className="mt-10 pt-8 border-t border-slate-200 text-center">
              <p className="text-slate-600 mb-2">
                <strong>Location:</strong> New York, NY · United States
              </p>
              <p className="text-slate-600">
                <strong>Email:</strong>{' '}
                <a href="mailto:Leonard@holterholdings.com" className="text-slate-900 hover:underline">
                  Leonard@holterholdings.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            Copyright © 2025 <strong className="text-white">Holter Holdings</strong>. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-slate-500">
            Holter Holdings is incorporated in Delaware. All inquiries are treated with strict confidentiality.
          </p>
        </div>
      </footer>

    </div>
  );
}
