export function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function Check({ dark = true }: { dark?: boolean }) {
  return (
    <svg
      className="compare-check"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={dark ? 'var(--fg3)' : '#0e0d0b'}
      strokeWidth="2"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function Cross() {
  return (
    <svg
      className="compare-check"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="oklch(0.6 0.15 25)"
      strokeWidth="2"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
