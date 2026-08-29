/* ================= LOGO MARK (SVG) ================= */
/* A simple structural/columns glyph inside a rounded square — reads as
   architecture + engineering without needing an external asset. */
export const LogoMark = ({
  className = "w-9 h-9",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center rounded-lg ${className} ${
      variant === "dark" ? "bg-brand-900" : "bg-white/10"
    }`}
  >
    <svg
      viewBox="0 0 24 24"
      className="h-[55%] w-[55%]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-6h6v6" />
    </svg>
  </span>
);

/* ================= LOGO (MARK + WORDMARK) ================= */
const SIZES = {
  sm: { icon: "w-8 h-8", text: "text-base" },
  md: { icon: "w-9 h-9", text: "text-lg" },
  lg: { icon: "w-11 h-11", text: "text-xl" },
} as const;

interface LogoProps {
  variant?: "dark" | "light";
  size?: keyof typeof SIZES;
  className?: string;
}

const Logo = ({ variant = "dark", size = "md", className = "" }: LogoProps) => {
  const { icon, text } = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark
        className={`${icon} ${variant === "dark" ? "text-gold-500" : "text-gold-400"}`}
        variant={variant}
      />
      <span className="leading-tight">
        <span
          className={`block font-display font-bold tracking-tight ${text} ${
            variant === "dark" ? "text-brand-900" : "text-white"
          }`}
        >
          MERIDIAN
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.14em] ${
            variant === "dark" ? "text-gold-600" : "text-gold-400"
          }`}
        >
          Engineering &amp; Consultancy
        </span>
      </span>
    </span>
  );
};

export default Logo;
