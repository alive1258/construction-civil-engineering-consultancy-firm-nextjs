import { Wrench, Landmark, Boxes, Image as ImageIcon, Camera, Calculator, type LucideIcon } from "lucide-react";

const ITEMS: { icon: LucideIcon; label: string }[] = [
  { icon: Wrench, label: "Structural Drawings" },
  { icon: Landmark, label: "Architectural Drawings" },
  { icon: Boxes, label: "BIM Models" },
  { icon: ImageIcon, label: "3D Renders" },
  { icon: Camera, label: "Site Photos" },
  { icon: Calculator, label: "Engineering Calculations" },
];

const TechnicalExcellence = () => {
  return (
    <section className="section-y bg-brand-50">
      <div className="container">
        <span className="eyebrow">Technical Depth</span>
        <h2 className="mt-3 text-3xl text-brand-900">Technical Excellence</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-md border border-brand-900/10 bg-white p-8">
              <span className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-[15.5px] font-semibold text-brand-900">{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExcellence;
