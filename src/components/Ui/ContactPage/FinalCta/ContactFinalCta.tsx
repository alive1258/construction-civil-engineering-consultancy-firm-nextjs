import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ContactFinalCta = () => {
  return (
    <section className="section-y bg-brand-50 text-center">
      <div className="container">
        <span className="eyebrow justify-center">Ready When You Are</span>
        <h2 className="mx-auto mt-3 max-w-xl text-3xl leading-tight text-brand-900 sm:text-[36px]">
          Your Vision. Our Expertise. One Successful Project.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-brand-500">
          Start a conversation with our engineering and architecture team
          today.
        </p>
        <Link
          href="#top"
          className="mt-8 inline-flex h-[52px] items-center gap-2 rounded-sm bg-brand-900 px-8 text-sm font-semibold text-white transition hover:bg-brand-800"
        >
          Request a Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default ContactFinalCta;
