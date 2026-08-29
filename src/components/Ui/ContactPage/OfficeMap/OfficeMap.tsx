import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";
import { OFFICE_ADDRESS } from "@/src/components/Shared/Navbar/menuItems";

const OfficeMap = () => {
  return (
    <section className="section-y">
      <div className="container">
        <div className="relative">
          <SiteImage src={STOCK.aerialMapView} alt="Map view of our office location" className="h-[420px] rounded-md" />
          <div className="relative mx-auto -mt-10 w-[calc(100%-32px)] max-w-sm rounded-md bg-white p-7 shadow-2xl lg:absolute lg:bottom-9 lg:left-9 lg:mt-0 lg:w-[300px]">
            <h3 className="text-base font-semibold text-brand-900">Our Office</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-brand-500">
              {OFFICE_ADDRESS}
            </p>
            <a
              href="#"
              className="mt-4 inline-flex h-[42px] items-center rounded-sm bg-brand-900 px-4 text-[13px] font-semibold text-white transition hover:bg-brand-800"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeMap;
