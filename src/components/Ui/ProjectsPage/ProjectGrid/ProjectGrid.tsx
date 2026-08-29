import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const PROJECTS = [
  { src: STOCK.housingDevelopment, category: "Residential", title: "Riverside Housing Development", location: "Dhaka, Bangladesh", services: "Architecture + Civil Engineering" },
  { src: STOCK.logisticsWarehouse, category: "Industrial", title: "Coastal Logistics Warehouse", location: "Chattogram, Bangladesh", services: "Civil + Structural Engineering" },
  { src: STOCK.universityCampusGrid, category: "Institutional", title: "Regional University Campus", location: "Rajshahi, Bangladesh", services: "Architecture + Project Management" },
  { src: STOCK.bypassRoad, category: "Infrastructure", title: "City Bypass Road & Drainage", location: "Sylhet, Bangladesh", services: "Civil Engineering + Survey" },
  { src: STOCK.officeTower, category: "Commercial", title: "Harborview Office Tower", location: "Khulna, Bangladesh", services: "Architecture + Structural + MEP" },
  { src: STOCK.bridgeRehab, category: "Structural", title: "Mid-Span Bridge Rehabilitation", location: "Dhaka, Bangladesh", services: "Structural Assessment + Retrofit" },
];

const ProjectGrid = () => {
  return (
    <section className="section-y bg-brand-50">
      <div className="container">
        <span className="eyebrow">Selected Work</span>
        <h2 className="mt-3 text-3xl text-brand-900">Recent Projects</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ src, category, title, location, services }) => (
            <div key={title} className="overflow-hidden rounded-md border border-brand-900/10 bg-white">
              <SiteImage src={src} alt={title} className="h-[200px]" />
              <div className="p-6">
                <div className="text-[10.5px] font-bold uppercase tracking-wide text-gold-600">
                  {category}
                </div>
                <h3 className="mt-2 text-[17px] font-semibold text-brand-900">{title}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-[12.5px] text-brand-500">
                  <MapPin size={13} className="text-gold-600" />
                  {location}
                </div>
                <div className="mt-2.5 border-t border-brand-900/10 pt-2.5 text-xs text-brand-500">
                  {services}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 border-b-2 border-gold-500 pb-0.5 text-sm font-semibold text-brand-900"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
