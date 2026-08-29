import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const INDUSTRIES = [
  { src: STOCK.residentialHouse, title: "Residential", desc: "Homes, apartments, housing developments." },
  { src: STOCK.modernOfficeBuilding, title: "Commercial", desc: "Office buildings, retail, mixed-use developments." },
  { src: STOCK.factoryWarehouse, title: "Industrial", desc: "Factories, warehouses, industrial facilities." },
  { src: STOCK.bridgeInfrastructure, title: "Infrastructure", desc: "Roads, bridges, drainage, utilities." },
  { src: STOCK.universityCampus, title: "Institutional", desc: "Schools, universities, hospitals, government facilities." },
  { src: STOCK.hotelResort, title: "Hospitality", desc: "Hotels, resorts, restaurants, leisure facilities." },
];

const Industries = () => {
  return (
    <section className="section-y bg-brand-50">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">Industries</span>
          <h2 className="mt-3 text-3xl text-brand-900">
            Solutions Across Multiple Sectors
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ src, title, desc }) => (
            <div
              key={title}
              className="overflow-hidden rounded-md border border-brand-900/10 bg-white"
            >
              <SiteImage src={src} alt={`${title} projects`} className="h-[150px]" />
              <div className="p-6">
                <h3 className="text-[16.5px] font-semibold text-brand-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-brand-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
