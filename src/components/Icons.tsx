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

export function GeneratorMark({
  size = 44,
  boltColor = 'var(--green-hover)',
  lightColor = 'var(--green-hover)',
  lightStyle,
  style,
  className,
  svgRef,
}: {
  size?: number;
  boltColor?: string;
  lightColor?: string;
  lightStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  className?: string;
  svgRef?: React.Ref<SVGSVGElement>;
}) {
  return (
    <svg
      ref={svgRef}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      {/* enclosure */}
      <rect x="2.5" y="7" width="19" height="11" rx="1.5" />
      {/* louvers */}
      <path d="M5.5 10.5v4M7.5 10.5v4" />
      {/* lifting eye */}
      <path d="M9 7V5.5h6V7" />
      {/* feet */}
      <path d="M5.5 18v1.5M18.5 18v1.5" />
      {/* bolt */}
      <path d="M14.5 9.8l-2.6 3.4h2.2l-1.1 2.6" stroke={boltColor} style={{ transition: 'stroke 0.35s' }} />
      {/* indicator light */}
      <circle
        cx="19.5"
        cy="9"
        r="0.75"
        fill={lightColor}
        stroke="none"
        style={{ transition: 'fill 0.35s', ...lightStyle }}
      />
    </svg>
  );
}
