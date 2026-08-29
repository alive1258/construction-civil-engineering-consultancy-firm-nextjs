import Link from "next/link";

const ServicesHero = () => {
  return (
    <section className="bg-linear-to-br from-brand-900 to-brand-700 py-24 text-center sm:py-28">
      <div className="container">
        <span className="eyebrow justify-center text-gold-400">What We Offer</span>
        <h1 className="mx-auto mt-3 max-w-3xl text-3xl leading-tight text-white sm:text-[44px]">
          Comprehensive Engineering &amp; Consultancy Services
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
          From architectural concept to detailed engineering and project
          execution, we provide integrated professional services under one
          roof.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex h-[52px] items-center rounded-sm bg-gold-500 px-8 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
        >
          Discuss Your Project
        </Link>
      </div>
    </section>
  );
};

export default ServicesHero;
