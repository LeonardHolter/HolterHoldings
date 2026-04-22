'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copy">© 2026 Holter Holdings. All rights reserved.</span>
      <button
        className="footer-back"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
