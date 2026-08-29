import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FinalCta = () => {
  return (
    <section className="bg-brand-900 py-24 text-center sm:py-28">
      <div className="container">
        <span className="eyebrow justify-center text-gold-400">Start a Project</span>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl leading-tight text-white sm:text-[38px]">
          Have a Project in Mind? Let&rsquo;s Build the Right Solution.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
          Talk to our engineering and architecture experts about your next
          project.
        </p>
        <Link
          href="/contact"
          className="mt-9 inline-flex h-[52px] items-center gap-2 rounded-sm bg-gold-500 px-8 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
        >
          Request a Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default FinalCta;
