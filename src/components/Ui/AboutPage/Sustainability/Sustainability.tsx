import { CheckCircle2 } from "lucide-react";
import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const ITEMS = [
  "Energy efficiency",
  "Sustainable materials",
  "Water conservation",
  "Passive design",
  "Green building",
  "Reduced construction waste",
  "Long-term lifecycle performance",
];

const Sustainability = () => {
  return (
    <section className="section-y">
      <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Long-Term Value</span>
          <h2 className="mt-3 text-3xl leading-tight text-brand-900 sm:text-[32px]">
            Designing for a Better Future
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2.5 text-[14.5px] font-medium text-brand-900"
              >
                <CheckCircle2 size={17} className="shrink-0 text-gold-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <SiteImage
          src={STOCK.greenifiedBuilding}
          alt="Sustainable green building design"
          className="h-[340px] rounded-md sm:h-[420px]"
        />
      </div>
    </section>
  );
};

export default Sustainability;
