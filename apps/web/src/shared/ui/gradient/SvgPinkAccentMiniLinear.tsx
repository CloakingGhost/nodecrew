export default function SvgPinkAccentMiniLinear() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <linearGradient
          id="fill-pink-accent-mini-linear"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%" // == 90deg
        >
          <stop offset="0%" stopColor="oklch(0.7266 0.2005 321.31)" />
          <stop offset="51.44%" stopColor="oklch(0.6946 0.1561 299.11)" />
          <stop offset="100%" stopColor="oklch(0.5323 0.2276 262.92)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
