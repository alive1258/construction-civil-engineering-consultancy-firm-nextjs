import { MapPin } from "lucide-react";
import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const AREAS = ["Dhaka", "Chattogram", "Rajshahi", "Sylhet", "Khulna"];

const ServiceAreas = () => {
  return (
    <section className="section-y bg-brand-50">
      <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <SiteImage
          src={STOCK.aerialCityView}
          alt="Aerial view of a serviced city"
          className="h-[300px] rounded-md sm:h-[340px]"
        />
        <div>
          <span className="eyebrow">Where We Work</span>
          <h2 className="mt-3 text-[30px] leading-tight text-brand-900">Service Areas</h2>
          <div className="mt-6 flex flex-col">
            {AREAS.map((area, i) => (
              <div
                key={area}
                className={`flex items-center gap-3 py-3.5 text-[15px] font-semibold text-brand-900 ${
                  i !== AREAS.length - 1 ? "border-b border-brand-900/10" : ""
                }`}
              >
                <MapPin size={17} className="text-gold-600" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
