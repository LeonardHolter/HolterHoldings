'use client';

import Link from 'next/link';

export default function CareersClient() {
  return (
    <div className="min-h-screen bg-slate-900">

      {/* Nav */}
      <nav className="w-full px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-white text-lg font-bold tracking-wider">
            Holter Holdings
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-white/80 hover:text-white transition-colors">About</Link>
            <Link href="/careers" className="text-sm text-white transition-colors">Careers</Link>
            <a
              href="mailto:Leonard@holterholdings.com"
              className="px-5 py-2.5 text-sm text-white font-medium border border-white rounded-md hover:bg-white hover:text-slate-900 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-white/50 uppercase tracking-widest mb-6">Applications Closed</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-8">
            Private Equity{' '}
            <span className="bg-slate-800 px-3 py-1 rounded-md inline-block">Intern</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Holter Holdings is a lower-middle-market private equity firm focused on acquiring and
            operating founder-led businesses across the US. We are looking for driven,
            detail-oriented interns to support our deal team across origination, diligence,
            and portfolio management.
          </p>
        </div>
      </section>

      {/* Role Details */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">

            {/* What you'll do */}
            <div className="bg-slate-800 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-6">What you&apos;ll do</h2>
              <ul className="space-y-4">
                {[
                  'Source and evaluate acquisition targets using proprietary screening frameworks',
                  'Build and maintain financial models (LBO, DCF, operating models)',
                  'Conduct industry research and prepare deal memos and investment committee materials',
                  'Support due diligence processes alongside senior team members',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we're looking for */}
            <div className="bg-slate-800 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-6">What we&apos;re looking for</h2>
              <ul className="space-y-4">
                {[
                  'Undergrad or postgrad student in Finance, Economics, or a related field',
                  'Strong financial modelling and analytical skills',
                  'High attention to detail and the ability to work independently',
                  'Prior experience in IB, PE, corporate finance, or M&A advisory preferred',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we offer */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">What we offer</h2>
              <ul className="space-y-4">
                {[
                  'Direct deal exposure from day one',
                  'Mentorship from experienced investors',
                  'A lean, high-ownership environment where your work matters',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Closed notice */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Applications Closed</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            This intake is now closed.
          </h2>
          <p className="text-white/60 leading-relaxed mb-10">
            We&apos;re not currently accepting applications for this position. Check back later or reach out directly if you think you&apos;d be a great fit.
          </p>
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
      </section>

      {/* Footer */}
      <section className="px-6 pb-6">
        <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex items-center justify-between">
          <p className="text-white/40 text-sm">&copy; 2026 Holter Holdings</p>
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
      </section>

    </div>
  );
}
