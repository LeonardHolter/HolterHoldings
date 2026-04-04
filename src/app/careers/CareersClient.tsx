'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

export default function CareersClient() {
  const [state, handleSubmit] = useForm('mojppvbj');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    setApplicantName((form.elements.namedItem('name') as HTMLInputElement)?.value ?? '');
    setApplicantEmail((form.elements.namedItem('email') as HTMLInputElement)?.value ?? '');
    handleSubmit(e);
  }

  const resumeMailto = `mailto:Leonard@holterholdings.com?subject=${encodeURIComponent(`Resume — PE Intern Application (${applicantName})`)}&body=${encodeURIComponent(`Hi Leonard,\n\nPlease find my resume attached for the Private Equity Intern position.\n\n— ${applicantName}\n${applicantEmail}`)}`;

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
          <p className="text-sm text-white/50 uppercase tracking-widest mb-6">Open Position</p>
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

      {/* Application Form */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Apply Now
          </h2>
          <p className="text-white/50 text-center mb-12">
            Fill out the form below. You&apos;ll then be prompted to email your resume to complete your application.
          </p>

          {state.succeeded ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-white mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3">Application Received</h3>
              <p className="text-white/60 max-w-sm mx-auto mb-8 leading-relaxed">
                One last step — please send your resume to complete your application.
              </p>
              <a
                href={resumeMailto}
                className="inline-flex items-center gap-3 px-7 py-3.5 text-sm text-white font-medium border border-white/70 rounded-md hover:bg-white hover:text-slate-900 transition-colors"
              >
                Send resume to Leonard
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <p className="text-white/30 text-xs mt-4">Opens your email client with a pre-filled message. Attach your resume before sending.</p>
            </div>
          ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <input type="hidden" name="_subject" value="PE Intern Application" />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/40"
                  placeholder="Jane Smith"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/40"
                  placeholder="jane@university.edu"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="university" className="block text-sm text-white/70 mb-2">
                  University
                </label>
                <input
                  id="university"
                  name="university"
                  type="text"
                  required
                  className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/40"
                  placeholder="University of Michigan"
                />
              </div>
              <div>
                <label htmlFor="graduation" className="block text-sm text-white/70 mb-2">
                  Expected Graduation
                </label>
                <input
                  id="graduation"
                  name="graduation"
                  type="text"
                  required
                  className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/40"
                  placeholder="May 2027"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                Why are you interested in Holter Holdings?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/40 resize-none"
                placeholder="Tell us about your interest in private equity and what draws you to our approach..."
              />
            </div>

            {state.errors != null && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or email your application directly to{' '}
                <a href="mailto:Leonard@holterholdings.com" className="underline">Leonard@holterholdings.com</a>.
              </p>
            )}

            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center gap-3 px-8 py-3.5 text-sm text-white font-medium border border-white/70 rounded-md hover:bg-white hover:text-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Submitting…' : 'Submit Application'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 9l3 3m0 0l-3 3m3-3H8" />
                </svg>
              </button>
            </div>
          </form>
          )}
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
