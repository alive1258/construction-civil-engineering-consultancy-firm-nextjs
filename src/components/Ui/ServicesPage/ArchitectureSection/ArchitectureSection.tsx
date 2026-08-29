import { CheckCircle2 } from "lucide-react";
import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const ARCHITECTURE_SERVICES = [
  "Concept design",
  "Master planning",
  "Building design",
  "Interior planning",
  "3D visualization",
  "Architectural documentation",
  "Building permits",
  "Sustainable design",
];

const DELIVERABLES = [
  "Floor plans",
  "Elevations",
  "Sections",
  "3D models",
  "Construction drawings",
];

const List = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <span className="inline-block border-b-2 border-gold-500 pb-3.5 font-display text-sm font-bold uppercase tracking-wider text-brand-900">
      {title}
    </span>
    <ul className="mt-5 flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2.5 text-[14.5px] font-medium text-brand-900">
          <CheckCircle2 size={16} className="shrink-0 text-gold-600" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="section-y">
      <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow">01 &middot; Architecture &amp; Planning</span>
          <h2 className="mt-3 text-3xl leading-tight text-brand-900 sm:text-[32px]">
            Architecture Services
          </h2>
          <p className="lede">
            Design that balances function, form, and long-term performance
            &mdash; carried from first concept through construction-ready
            documentation.
          </p>
          <div className="mt-9 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <List title="Architecture Services" items={ARCHITECTURE_SERVICES} />
            <List title="Deliverables" items={DELIVERABLES} />
          </div>
        </div>
        <SiteImage
          src={STOCK.architecturalBlueprint}
          alt="Architectural blueprint and building design"
          className="h-[420px] rounded-md"
        />
      </div>
    </section>
  );
};

export default ArchitectureSection;
