'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutClient() {
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
            <Link href="/about" className="text-sm text-white transition-colors">About</Link>
            <a href="mailto:Leonard@holterholdings.com" className="px-5 py-2.5 text-sm text-white font-medium border border-white rounded-md hover:bg-white hover:text-slate-900 transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* ── Headline ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-16">
            An overnight success,{' '}
            <span className="bg-slate-800 px-3 py-1 rounded-md inline-block">a few years</span>{' '}
            in the making.
          </h1>

          <div className="space-y-8 text-white/80 text-xl leading-relaxed">
            <p>We started out as operators, not investors.<br />We never intended to become buyers.</p>
            <p>
              We spent years building and running businesses in the trades and service industries.
              Along the way, we learned what actually makes these companies tick, the routes, the
              technicians, the recurring customers, the local trust that takes a decade to build.
            </p>
            <p>Every once in a while, we&apos;d get an email from a private equity firm.</p>
            <p>
              Their emails were confusing. They bragged about their &lsquo;AUM&rsquo; and &lsquo;CAGR&rsquo;
              and dropped that they&apos;d gone to Harvard every third sentence.
            </p>
            <p>They were aliens. We didn&apos;t speak their language.<br />Spreadsheet jockeys who&apos;d never met a payroll.</p>
          </div>
        </div>
      </section>

      {/* ── People running illustration ── */}
      <div className="w-full max-w-xs mx-auto px-6">
        <Image
          src="/people-chasing.png"
          alt="People chasing a founder with contracts"
          width={400}
          height={300}
          className="w-full object-contain"
        />
      </div>

      {/* ── More story ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 text-white/80 text-xl leading-relaxed">
          <p>Eventually, we gave in and sold one of our businesses to them.</p>
          <p>
            It was a brutal six-month marathon. Piles of legal documents,
            constant renegotiations, and all-day meetings that
            spooked our management team.
          </p>
          <p>
            By closing, we were exhausted and barely
            recognized the deal we&apos;d originally shaken hands on.
          </p>
          <p>
            Then we read about how Warren Buffett does billion-dollar deals
            quickly by keeping the process painless and promising founders to
            take good care of their businesses.
          </p>
          <p>
            Nobody had done this for garage door and home service companies like ours, so we said
            &ldquo;screw it&rdquo; and decided to do it ourselves{' '}
            <strong className="text-white">using Buffett&apos;s simple approach.</strong>
          </p>
        </div>
      </section>

      {/* ── Buffett illustration ── */}
      <div className="w-full max-w-2xl mx-auto px-6">
        <Image
          src="/buffett.png"
          alt="Inspired by Warren Buffett's approach"
          width={800}
          height={500}
          className="w-full object-contain mix-blend-screen"
        />
      </div>

      {/* ── We started Holter Holdings ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 text-white/80 text-xl leading-relaxed">
          <p className="text-white font-bold text-2xl">We started Holter Holdings to be different.</p>
          <p className="text-white font-bold text-2xl">
            To become the buyer we <em>wish</em><br />we could have sold to.
          </p>
          <p>
            We thought about all the things we hated about selling our
            company and worked backwards, then used our capital
            to buy wonderful garage door businesses from founders like us.
          </p>
          <p>
            It turns out that selling your company doesn&apos;t
            need to be so complicated and miserable.
          </p>
          <p>
            We make offers in days, not months, let founders dictate their
            role (stay, go, or something in between), and leave the
            companies we acquire alone for the long-term.
          </p>
          <p>
            So far, it&apos;s worked out well. Our portfolio is growing
            and we&apos;re still going.
          </p>
          <p>Ready to skip the BS?</p>
          <p className="text-white font-bold text-2xl">
            Life is too short to sell to a guy named Chad
            who calls your team &ldquo;human capital.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Here's how we do it ── */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-20">
            Here&apos;s how we do it:
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            {[
              { title: 'Speak plainly', desc: "Don't waste people's time. We speak plainly: no BS, buzzwords, or stupid finance terms." },
              { title: 'Protect culture', desc: "Don't mess with the culture that makes each company unique." },
              { title: 'Stay independent', desc: 'We leave all our businesses to operate independently. No forced integration, no synergy nonsense.' },
              { title: 'Make founders proud', desc: 'Founders entrust us with their companies. We do our best to follow through on their vision.' },
              { title: 'No nonsense', desc: 'Life is too short for difficult people, hidden agendas, and all that stuff...' },
              { title: 'Leave people alone', desc: 'We buy great companies, hire great leaders, and leave them to do their thing.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-lg mx-auto">
            <div className="md:col-span-4 flex justify-center gap-6 flex-wrap">
              <div className="bg-slate-100 rounded-xl overflow-hidden w-56">
                <Image
                  src="/leonard-photo.png"
                  alt="Leonard Holter"
                  width={224}
                  height={224}
                  className="w-full aspect-square object-cover object-top"
                />
                <div className="p-4">
                  <p className="font-bold text-slate-900 text-sm">Leonard Holter</p>
                  <p className="text-slate-500 text-xs mt-0.5">Chairman</p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-xl overflow-hidden w-56">
                <Image
                  src="/john-colman.png"
                  alt="John Colman"
                  width={224}
                  height={224}
                  className="w-full aspect-square object-cover object-top"
                />
                <div className="p-4">
                  <p className="font-bold text-slate-900 text-sm">John Colman</p>
                  <p className="text-slate-500 text-xs mt-0.5">Senior Analyst</p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-xl overflow-hidden w-56">
                <Image
                  src="/tommaso-mortara.png"
                  alt="Tommaso Mortara"
                  width={224}
                  height={224}
                  className="w-full aspect-square object-cover object-top"
                />
                <div className="p-4">
                  <p className="font-bold text-slate-900 text-sm">Tommaso Mortara</p>
                  <p className="text-slate-500 text-xs mt-0.5">Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
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

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 flex items-center justify-between max-w-6xl mx-auto">
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
      </section>

    </div>
  );
}
