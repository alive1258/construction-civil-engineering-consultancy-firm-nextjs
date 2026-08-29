import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutCta = () => {
  return (
    <section className="bg-brand-900 py-24 text-center sm:py-28">
      <div className="container">
        <span className="eyebrow justify-center text-gold-400">Work With Us</span>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl leading-tight text-white sm:text-[38px]">
          Partner With Us on Your Next Project
        </h2>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/about#team"
            className="inline-flex h-[52px] items-center gap-2 rounded-sm border border-white/30 px-7 text-sm font-semibold text-white transition hover:border-white/60"
          >
            Meet Our Team <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-[52px] items-center gap-2 rounded-sm bg-gold-500 px-7 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
          >
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
