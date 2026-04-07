'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About', href: '/about' },
    { id: 'careers', label: 'Careers', href: '/careers' },
    { id: 'contact', label: 'Contact', href: undefined },
  ];

  return (
    <div className="min-h-screen">

      {/* ── Hero (full viewport, solid slate-900 background) ── */}
      <section className="relative min-h-screen flex flex-col bg-slate-900">

        {/* Nav */}
        <nav className="w-full px-6 lg:px-12 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white text-lg font-bold tracking-wider"
            >
              Holter Holdings
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-white/90 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-white/90 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <a
                href="mailto:Leonard@holterholdings.com"
                className="px-5 py-2.5 text-sm text-white font-medium border border-white rounded-md hover:bg-white hover:text-slate-900 transition-colors"
              >
                Get in touch
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4 space-y-3">
              {navItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block w-full text-left text-sm text-white/80 hover:text-white py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-sm text-white/80 hover:text-white py-2"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <a
                href="mailto:Leonard@holterholdings.com"
                className="block w-full text-center mt-2 px-5 py-2.5 text-sm text-white font-medium border border-white rounded-md hover:bg-white hover:text-slate-900 transition-colors"
              >
                Get in touch
              </a>
            </div>
          )}
        </nav>

        {/* Heading + illustration */}
        <div className="flex-1 flex items-center px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 items-end">
            {/* Left — text, vertically centered */}
            <div className="pb-16">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-[1.05]">
                We buy{' '}
                <span className="bg-slate-800 px-3 py-1 rounded-md inline-block">garage door</span>
                {' '}businesses.
              </h1>

              <p className="mt-8 text-lg md:text-xl text-white/70 max-w-md leading-relaxed">
                We partner with founders to provide straightforward exits
                that protect their team and culture and keep their
                businesses operating for the long term.
              </p>
            </div>

            {/* Right — illustration anchored to bottom */}
            <div className="flex items-end justify-center md:justify-end self-end">
              <Image
                src="/garage-door-tech.png"
                alt="Garage door technician"
                width={620}
                height={620}
                className="w-full max-w-md lg:max-w-lg object-contain mix-blend-screen"
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-full border-t border-white/20 mt-12" />
      </section>

      {/* ── "Selling your company" section ── */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Centered heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-16 leading-tight max-w-3xl mx-auto">
            Selling your company<br />shouldn&apos;t look like this:
          </h2>

          {/* Two-column: illustration left, text right */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            {/* Left — illustration */}
            <div className="flex items-center justify-center md:justify-start -mx-6 md:-mx-0">
              <Image
                src="/selling-chaos.png"
                alt="The chaos of selling a company the traditional way"
                width={1200}
                height={1200}
                className="w-full object-contain mix-blend-screen"
              />
            </div>

            {/* Right — text */}
            <div className="space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
              After watching too many great operators go through the misery of selling to traditional buyers, we started Holter Holdings to become the buyer we wish existed for them.


              </p>

              <p className="text-white text-lg font-semibold">
                We do it differently.
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                A fair offer in 7 days. Close in as quick as 30. Keep your team
                and culture intact.
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                No months of negotiations. No legal fee surprises. No
                watching your life&apos;s work get dismantled.
              </p>

              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center gap-3 mt-4 px-6 py-3 text-sm text-white font-medium border border-white/60 rounded-full hover:bg-white hover:text-slate-900 transition-colors"
              >
                Learn more about why we started Holter Holdings
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 9l3 3m0 0l-3 3m3-3H8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── "Holter Holdings vs. The Other Guys" comparison ── */}
      <section className="bg-slate-900 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Holter Holdings vs. The Other Guys
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Venture Capital */}
            <div className="bg-slate-800 rounded-2xl p-8 flex flex-col">
              <div className="flex justify-center mb-6 h-48">
                <Image
                  src="/venture-capital-illustration.png"
                  alt="Venture Capital"
                  width={200}
                  height={200}
                  className="object-contain h-full w-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Venture Capital</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-white/80">Huge valuation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-white/80">3–6 month process</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-white/80">Founders committed to 5+ years</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-white/80">Terms could make your equity worthless</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-white/80">Pressure to provide 10–100X returns</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-white/80">No cash to founders, just money to grow</span>
                </li>
              </ul>
            </div>

            {/* Private Equity */}
            <div className="bg-slate-800 rounded-2xl p-8 flex flex-col">
              <div className="flex justify-center mb-6 h-48">
                <Image
                  src="/private-equity-illustration.png"
                  alt="Private Equity"
                  width={200}
                  height={200}
                  className="object-contain h-full w-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Private Equity</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-white/80">Full or partial cash out</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-white/80">3–6 month process</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-white/80">Founders locked in with earnout structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-white/80">Terms could make your equity worthless</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-white/80">Intervene and change your culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-white/80">Typically flip your company in 3–5 years</span>
                </li>
              </ul>
            </div>

            {/* Holter Holdings */}
            <div className="bg-white rounded-2xl p-8 flex flex-col">
              <div className="flex justify-center mb-6 h-48">
                <Image
                  src="/holter-illustration.png"
                  alt="Holter Holdings"
                  width={200}
                  height={200}
                  className="object-contain h-full w-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Holter Holdings</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700">Full or partial cash out</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700">Deal size ranging from $1M–$10M</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700">Potential 30-day process</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700">Founders can stay or go, we&apos;re flexible</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700">Simple structure with cash upfront</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700">Operational best practices, focus on culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700">Holds companies for the long term</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── "We like to buy businesses that have" ── */}
      <section className="bg-slate-900 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-20">
            We like to buy businesses that have:
          </h2>

          {/* Top row — 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
            {[
              { src: '/icon-highmargins.png', title: 'High margins', sub: 'Healthy and sustainable' },
              { src: '/icon-unique-advantage.png', title: 'A unique advantage', sub: 'Like a brand, community, or niche' },
              { src: '/icon-simple-model.png', title: 'A simple business model', sub: 'You can explain it to your parents' },
              { src: '/icon-highprofit.png', title: 'Healthy Profit', sub: '$500k to $3 million EBITDA' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-5 flex items-center justify-center">
                  <Image src={item.src} alt={item.title} width={80} height={80} className="object-contain" />
                </div>
                <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-white/60 text-xs leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Bottom row — 3 items, centered */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {[
              { src: '/icon-successful-ops.png', title: 'Successful operations', sub: 'Of three years or longer' },
              { src: '/icon-quality-team.png', title: 'A high-quality team', sub: 'A great team with a positive culture' },
              { src: '/icon-positive.png', title: 'A positive and ethical approach', sub: 'No sketchy stuff' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-5 flex items-center justify-center">
                  <Image src={item.src} alt={item.title} width={80} height={80} className="object-contain" />
                </div>
                <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-white/60 text-xs leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + Footer ── */}
      <section id="contact" className="bg-slate-900 pt-24 pb-0 px-6">
        <div className="max-w-6xl mx-auto">

          {/* "Think you might be a fit?" */}
          <div className="text-center py-20 border-b border-white/20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10">
              Think you might be a fit?
            </h2>
            <a
              href="mailto:Leonard@holterholdings.com"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-sm text-white font-medium border border-white/70 rounded-md hover:bg-white hover:text-slate-900 transition-colors"
            >
              Get in touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 9l3 3m0 0l-3 3m3-3H8" />
              </svg>
            </a>
          </div>

          {/* Bottom bar */}
          <div className="py-6 border-t border-white/10 flex items-center justify-between">
            <p className="text-white/40 text-sm">© 2026 Holter Holdings</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase hover:text-white/70 transition-colors"
            >
              Back to top
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15V9m0 0l-3 3m3-3l3 3" />
              </svg>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
