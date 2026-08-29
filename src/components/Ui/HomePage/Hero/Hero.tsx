import Link from "next/link";
import { Award } from "lucide-react";
import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const Hero = () => {
  return (
    <section className="relative overflow-visible bg-linear-to-br from-brand-900 via-brand-900 to-brand-700">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(100deg, rgba(255,255,255,.5) 0 1px, transparent 1px 84px)",
        }}
      />
      <div className="container relative grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">
            Engineering &middot; Architecture &middot; Consultancy
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Engineering Better. Designing Smarter. Building the Future.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
            Integrated engineering, architecture, and civil consultancy
            services delivering innovative, sustainable, and technically
            sound solutions for complex projects.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex h-[52px] items-center rounded-sm bg-gold-500 px-7 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              Request a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex h-[52px] items-center rounded-sm border border-white/30 px-7 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        <div className="relative pb-8 lg:pb-0">
          <SiteImage
            src={STOCK.heroConstruction}
            alt="Modern commercial building under construction"
            priority
            className="h-[340px] rounded-md sm:h-[420px] lg:h-[480px]"
          />
          <div className="relative mx-auto -mt-10 flex w-[calc(100%-24px)] max-w-sm items-center gap-4 rounded-md bg-white px-6 py-5 shadow-2xl lg:absolute lg:-bottom-10 lg:-left-7 lg:mt-0 lg:w-[300px]">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
              <Award size={22} />
            </span>
            <div>
              <div className="font-display text-xl font-bold text-brand-900">
                25+ Years
              </div>
              <div className="mt-0.5 text-xs text-brand-500">
                of Expertise &mdash; Engineering, Architecture &amp;
                Consultancy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
