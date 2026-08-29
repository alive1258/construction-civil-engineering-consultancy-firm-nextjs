import { Target, Star } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="section-y bg-brand-50">
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-md border border-brand-900/10 bg-white p-9 sm:p-11">
          <span className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
            <Target size={23} />
          </span>
          <h3 className="mt-5 text-xl font-semibold text-brand-900">Mission</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-brand-500">
            To deliver innovative, technically sound, and sustainable
            solutions that create lasting value for our clients and
            communities.
          </p>
        </div>
        <div className="rounded-md border border-brand-900/10 bg-white p-9 sm:p-11">
          <span className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
            <Star size={23} />
          </span>
          <h3 className="mt-5 text-xl font-semibold text-brand-900">Vision</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-brand-500">
            To become a trusted leader in integrated engineering,
            architecture, and consultancy services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
