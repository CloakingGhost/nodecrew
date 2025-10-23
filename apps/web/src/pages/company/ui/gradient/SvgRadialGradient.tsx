export default function SvgRadialGradient() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <radialGradient
          id="icon-gradient-primary"
          cx="50%"
          cy="76.92%"
          r="165.6%"
          fx="50%"
          fy="76.92%"
        >
          <stop offset="0%" stopColor="oklch(0.6257 0.187 263.79)" />
          <stop offset="100%" stopColor="oklch(0.3973 0.1677 262.84)" />
        </radialGradient>
      </defs>
    </svg>
  );
}
