'use client';

import { useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

const ACCEPTED_TYPES = '.pdf,.doc,.docx';
const MAX_FILE_SIZE_MB = 10;

export default function CareersClient() {
  const [state, handleSubmit] = useForm('mojppvbj');
  const [resume, setResume] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  function validateFile(file: File): string | null {
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (!['pdf', 'doc', 'docx'].includes(ext ?? '')) return 'Please upload a PDF or Word document.';
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) return `File must be under ${MAX_FILE_SIZE_MB}MB.`;
    return null;
  }

  function handleFile(file: File) {
    const err = validateFile(file);
    if (err) { setFileError(err); return; }
    setFileError('');
    setResume(file);
    if (fileInputRef.current) {
      const dt = new DataTransfer();
      dt.items.add(file);
      fileInputRef.current.files = dt.files;
    }
  }

  function clearFile(e: React.MouseEvent) {
    e.stopPropagation();
    setResume(null);
    setFileError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!resume) {
      e.preventDefault();
      setFileError('Please attach your resume.');
      return;
    }
    handleSubmit(e);
  }

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
            Fill out the form and upload your resume to apply.
          </p>

          {state.succeeded ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-white mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3">Application Received</h3>
              <p className="text-white/60 mb-8">Thanks for applying. We&apos;ll be in touch soon.</p>
            </div>
          ) : (
          <form onSubmit={onSubmit} className="space-y-6" encType="multipart/form-data">
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

            {/* Resume Upload */}
            <div>
              <label className="block text-sm text-white/70 mb-2">
                Resume <span className="text-white/40">(PDF or Word, max 10 MB)</span>
              </label>
              {/* Single file input: carries name="resume" so Formspree can read it on submit */}
              <input
                ref={fileInputRef}
                id="resume"
                type="file"
                name="resume"
                accept={ACCEPTED_TYPES}
                className="hidden"
                onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }}
              />
              <div
                role="button"
                tabIndex={0}
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInputRef.current?.click(); } }}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
                }}
                className={`w-full rounded-lg border-2 border-dashed px-4 py-8 text-center cursor-pointer transition-colors ${
                  dragOver
                    ? 'border-white/60 bg-slate-700'
                    : resume
                      ? 'border-white/30 bg-slate-800'
                      : 'border-white/10 bg-slate-800 hover:border-white/30'
                }`}
              >
                {resume ? (
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 text-white/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-white/80">{resume.name}</span>
                    <span className="text-xs text-white/40">({(resume.size / 1024 / 1024).toFixed(1)} MB)</span>
                    <button
                      type="button"
                      onClick={(e) => { clearFile(e); }}
                      className="ml-2 p-1 rounded hover:bg-slate-700"
                    >
                      <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <>
                    <svg className="w-8 h-8 text-white/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <p className="text-sm text-white/40">
                      Drag and drop your resume here, or <span className="text-white/70 underline underline-offset-2">browse</span>
                    </p>
                  </>
                )}
              </div>
              {fileError && <p className="text-red-400 text-xs mt-2">{fileError}</p>}
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
