import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DarkCtaProps {
  eyebrow: string;
  heading: string;
  buttonLabel: string;
  href?: string;
}

const DarkCta = ({ eyebrow, heading, buttonLabel, href = "/contact" }: DarkCtaProps) => {
  return (
    <section className="bg-brand-900 py-24 text-center sm:py-28">
      <div className="container">
        <span className="eyebrow justify-center text-gold-400">{eyebrow}</span>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl leading-tight text-white sm:text-[38px]">
          {heading}
        </h2>
        <Link
          href={href}
          className="mt-9 inline-flex h-[52px] items-center gap-2 rounded-sm bg-gold-500 px-8 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
        >
          {buttonLabel} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default DarkCta;
