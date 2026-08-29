import { CheckCircle2, Wind, Zap, Droplet, type LucideIcon } from "lucide-react";

const GROUPS: { icon: LucideIcon; title: string; items: string[] }[] = [
  { icon: Wind, title: "Mechanical", items: ["HVAC", "Ventilation", "Fire protection"] },
  {
    icon: Zap,
    title: "Electrical",
    items: ["Power distribution", "Lighting", "Backup power", "Low-voltage systems"],
  },
  { icon: Droplet, title: "Plumbing", items: ["Water supply", "Drainage", "Sanitary systems"] },
];

const MepSection = () => {
  return (
    <section id="mep" className="section-y bg-brand-50">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">04 &middot; MEP Engineering</span>
          <h2 className="mt-3 text-3xl text-brand-900">
            Mechanical, Electrical &amp; Plumbing
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {GROUPS.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-md border border-brand-900/10 bg-white p-8">
              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold text-brand-900">{title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-brand-900">
                    <CheckCircle2 size={15} className="shrink-0 text-gold-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MepSection;
