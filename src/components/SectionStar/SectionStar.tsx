import css from "./SectionStar.module.css";

export default function SectionStar() {
  return (
    <div className={css.star} aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient
            id="section-star-gradient"
            x1="15"
            y1="10"
            x2="50"
            y2="55"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#C5D8EF" />
            <stop offset="100%" stopColor="#829FCA" />
          </linearGradient>
          <filter id="section-star-glow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <path
          d="M32 8 C36 24 40 28 56 32 C40 36 36 40 32 56 C28 40 24 36 8 32 C24 28 28 24 32 8Z"
          fill="#A5BCD6"
          opacity="0.45"
          filter="url(#section-star-glow)"
        />

        <path
          d="M32 8 C36 24 40 28 56 32 C40 36 36 40 32 56 C28 40 24 36 8 32 C24 28 28 24 32 8Z"
          fill="url(#section-star-gradient)"
          stroke="#FFFFFF"
          strokeOpacity="0.7"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
