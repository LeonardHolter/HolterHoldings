'use client';

import { useEffect, useRef, useState } from 'react';

/** Real-time playback rate before the clip starts settling. */
const HERO_RATE = 0.8;

/** The clip plays once and freezes on this frame. */
const HERO_STOP_AT = 3.25;

/** How many seconds of clip time the deceleration is spread over. */
const HERO_EASE_WINDOW = 1;

/** Playback rate at the moment it comes to rest. */
const HERO_MIN_RATE = 0.71;

/**
 * playbackRate is only rewritten once it drifts this far from the last applied
 * value. Setting it every frame makes the decoder resample constantly, which
 * is what makes a continuous ramp stutter.
 */
const RATE_STEP = 0.04;

const indexLinks = [
  { href: '/about-us', title: 'About Us' },
  { href: '/shareholder-letters', title: 'Shareholder Letters' },
  { href: '/why-sell-to-us', title: 'Why Sell to Us' },
  { href: '/investment-criteria', title: 'Investment Criteria' },
];

export default function HomeClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultPlaybackRate = HERO_RATE;
    video.playbackRate = HERO_RATE;

    let frame = 0;
    let lastApplied = HERO_RATE;

    const check = () => {
      const remaining = HERO_STOP_AT - video.currentTime;

      // Play the opening slice once, then hold on that frame.
      if (remaining <= 0) {
        video.pause();
        video.currentTime = HERO_STOP_AT;
        setSettled(true);
        return;
      }

      // Coast to a stop rather than cutting.
      if (remaining < HERO_EASE_WINDOW) {
        const t = remaining / HERO_EASE_WINDOW;
        const target = HERO_MIN_RATE + (HERO_RATE - HERO_MIN_RATE) * Math.pow(t, 1.5);
        if (Math.abs(target - lastApplied) >= RATE_STEP) {
          video.playbackRate = target;
          lastApplied = target;
        }
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

  return (
    <div className="home">

      <section className="home-hero">
        <div className={`home-hero-stage${settled ? ' is-settled' : ''}`}>
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
          <nav className="hero-links">
            {indexLinks.map((link) => (
              <a key={link.href} href={link.href} className="hero-link">
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

    </div>
  );
}
