import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const WhoWeAre = () => {
  return (
    <section className="section-y">
      <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <SiteImage
          src={STOCK.officeTeam}
          alt="Meridian team collaborating in the office"
          className="h-[380px] rounded-md lg:h-[440px]"
        />
        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="mt-3 text-3xl leading-tight text-brand-900 sm:text-[32px]">
            Who We Are
          </h2>
          <p className="lede">
            Founded by a small group of engineers and architects who wanted
            design and engineering handled by one accountable team, Meridian
            has grown into a multidisciplinary consultancy working across
            residential, commercial, industrial, and infrastructure
            projects.
          </p>
          <p className="lede">
            Today our team combines structural, civil, architectural, and
            MEP expertise under one roof, serving clients across Dhaka,
            Chattogram, and beyond &mdash; from first feasibility study
            through to construction support and handover.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
