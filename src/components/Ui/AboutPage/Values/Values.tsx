import { ShieldCheck, Star, Lightbulb, Leaf, Users, CheckCircle2, type LucideIcon } from "lucide-react";

const VALUES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: ShieldCheck, title: "Integrity", desc: "Honest advice and transparent professional relationships." },
  { icon: Star, title: "Excellence", desc: "Continuous pursuit of technical and design excellence." },
  { icon: Lightbulb, title: "Innovation", desc: "Using modern technologies and engineering practices." },
  { icon: Leaf, title: "Sustainability", desc: "Creating environmentally responsible solutions." },
  { icon: Users, title: "Collaboration", desc: "Bringing multidisciplinary expertise together." },
  { icon: CheckCircle2, title: "Accountability", desc: "Taking ownership of project outcomes." },
];

const Values = () => {
  return (
    <section className="section-y">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">What We Stand For</span>
          <h2 className="mt-3 text-3xl text-brand-900">Our Values</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-brand-900/10 bg-brand-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white p-8">
              <span className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-[16.5px] font-semibold text-brand-900">{title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-brand-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
