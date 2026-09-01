'use client';

import { useEffect, useRef, useState } from 'react';
import { GeneratorMark } from '@/components/Icons';

/** Set to false to skip the generator boot sequence. */
const INTRO_ENABLED = true;

/** The hero video loops this first slice of the clip, forever. */
const HERO_LOOP_END = 4.5;

/** Slowed down a touch from real time. */
const HERO_RATE = 0.8;

/** After this many loops, ease the page down to the content - unless the reader already moved. */
const HERO_LOOPS_BEFORE_SCROLL = 2;

type Phase = 'idle' | 'starting' | 'running' | 'settle';
type Morph = { dx: number; dy: number; scale: number };

const indexLinks = [
  { href: '/about-us', title: 'About Us' },
  { href: '/shareholder-letters', title: 'Shareholder Letters' },
  { href: '/why-sell-to-us', title: 'Why Sell to Us' },
  { href: '/investment-criteria', title: 'Investment Criteria' },
];

export default function HomeClient() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [visible, setVisible] = useState(INTRO_ENABLED);
  const [morph, setMorph] = useState<Morph | null>(null);

  const genRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<SVGSVGElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const loopsRef = useRef(0);
  const readerMovedRef = useRef(false);
  const autoScrolledRef = useRef(false);

  useEffect(() => {
    if (!INTRO_ENABLED) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return;
    }

    const timers = [
      setTimeout(() => setPhase('starting'), 700),
      setTimeout(() => setPhase('running'), 1700),
      setTimeout(() => {
        // Fly the boot generator into the spot the inline icon occupies.
        const gen = genRef.current?.getBoundingClientRect();
        const target = targetRef.current?.getBoundingClientRect();
        if (gen && target) {
          setMorph({
            dx: target.left + target.width / 2 - (gen.left + gen.width / 2),
            dy: target.top + target.height / 2 - (gen.top + gen.height / 2),
            scale: target.width / gen.width,
          });
        }
        setPhase('settle');
      }, 2400),
      setTimeout(() => setVisible(false), 3600),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultPlaybackRate = HERO_RATE;
    video.playbackRate = HERO_RATE;

    const autoScroll = () => {
      if (autoScrolledRef.current || readerMovedRef.current) return;
      // Someone who is already down the page gets left alone.
      if (window.scrollY > 4) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      autoScrolledRef.current = true;
      window.scrollTo({
        top: stageRef.current?.getBoundingClientRect().height ?? window.innerHeight,
        behavior: 'smooth',
      });
    };

    let frame = 0;
    const check = () => {
      // Loop the opening slice rather than the whole clip.
      if (video.currentTime >= HERO_LOOP_END) {
        video.currentTime = 0;
        loopsRef.current += 1;
        if (loopsRef.current >= HERO_LOOPS_BEFORE_SCROLL) autoScroll();
      }
      frame = requestAnimationFrame(check);
    };
    frame = requestAnimationFrame(check);

    // Playback rate resets across a source load in some browsers.
    const onLoaded = () => {
      video.playbackRate = HERO_RATE;
    };
    video.addEventListener('loadedmetadata', onLoaded);

    return () => {
      cancelAnimationFrame(frame);
      video.removeEventListener('loadedmetadata', onLoaded);
    };
  }, []);

  useEffect(() => {
    const mark = () => {
      readerMovedRef.current = true;
    };
    const scrollKeys = new Set([
      'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'Spacebar',
    ]);
    const onKeyDown = (e: KeyboardEvent) => {
      if (scrollKeys.has(e.key)) mark();
    };

    window.addEventListener('wheel', mark, { passive: true });
    window.addEventListener('touchmove', mark, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', mark);
      window.removeEventListener('touchmove', mark);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const starting = phase === 'starting';
  const running = phase === 'running' || phase === 'settle';
  const exiting = phase === 'settle';
  const showOverlay = INTRO_ENABLED && visible;

  const boltColor = running ? 'var(--green-hover)' : starting ? 'var(--ink)' : 'var(--gen-idle)';
  const lightColor = running ? 'var(--green-hover)' : starting ? 'var(--gen-warm)' : 'var(--rule)';
  const wire = showOverlay ? 'none' : undefined;

  return (
    <>
      {showOverlay && (
        <div className="gen-overlay" style={{ pointerEvents: exiting ? 'none' : 'auto' }}>
          <div className="gen-overlay-veil" style={{ opacity: exiting ? 0 : 1 }} />
          <div className="gen-overlay-center">
            <div className="gen-stack">
              <div
                ref={genRef}
                className="gen-morph"
                style={{
                  transform:
                    exiting && morph
                      ? `translate(${morph.dx}px, ${morph.dy}px) scale(${morph.scale})`
                      : 'none',
                }}
              >
                <div
                  style={{
                    animation: starting
                      ? 'gen-shake 0.09s linear infinite'
                      : running
                        ? 'gen-shake 0.16s linear infinite'
                        : 'none',
                  }}
                >
                  <GeneratorMark size={130} boltColor={boltColor} lightColor={lightColor} />
                </div>
              </div>
              <div
                className="gen-status"
                style={{
                  color: running ? 'var(--ink)' : 'var(--gen-idle)',
                  opacity: exiting ? 0 : 1,
                }}
                role="status"
              >
                <span
                  className="gen-status-dot"
                  style={{
                    background: lightColor,
                    animation: starting ? 'dot-blink 0.4s linear infinite' : 'none',
                  }}
                />
                {running ? 'Generator running' : starting ? 'Starting generator' : 'Standby'}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="home" style={{ opacity: showOverlay && !exiting ? 0 : 1 }}>

        <section className="home-hero">
          <div className="home-hero-stage" ref={stageRef}>
            <video
              ref={videoRef}
              className="home-hero-video"
              src="/hero.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
            />
            <div className="home-hero-tint" />
            <div className="home-hero-scrim" />
            <div className="home-hero-copy">
              <h1>
                We buy generator companies, and hold them <em>forever.</em>
              </h1>
              <p>We never sell and we never change something that is working.</p>
            </div>
          </div>
        </section>

        <div className="home-hero-gap" />

        <section className="gen-band">
          <div className="gen-rule-row">
            <span className="gen-rule">
              <span
                className="gen-pulse"
                style={{ left: '100%', animation: wire ?? 'wire-flow-left 1.7s linear infinite' }}
              />
            </span>
            <GeneratorMark
              svgRef={targetRef}
              className="gen-mark"
              size={44}
              style={{ opacity: showOverlay && morph ? 0 : 1 }}
              lightStyle={{ animation: 'dot-pulse 2.4s ease-in-out infinite' }}
            />
            <span className="gen-rule">
              <span
                className="gen-pulse"
                style={{ left: -22, animation: wire ?? 'wire-flow-right 1.7s linear infinite' }}
              />
            </span>
          </div>
        </section>

        <section className="home-index">
          {indexLinks.map((link) => (
            <a key={link.href} href={link.href}>
              <span className="home-index-title">{link.title}</span>
              <svg
                className="home-index-arrow"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </section>

        <footer className="home-foot">
          <div className="foot-legal">
            <span className="foot-contact">
              Contact: <a href="tel:+19296261703">929 626 1703</a>
              &nbsp;&middot;&nbsp; New York, NY 10027
            </span>
            <span style={{ display: 'flex', gap: 8 }}>
              <a href="/contact">Contact</a>
              <span style={{ color: 'var(--ink3)' }}>&middot;</span>
              <a href="/legal">Legal Disclaimer</a>
              <span style={{ color: 'var(--ink3)' }}>&middot;</span>
              <a href="/privacy">Privacy</a>
            </span>
          </div>
        </footer>

      </div>
    </>
  );
}
