import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const FeaturedProject = () => {
  return (
    <section className="section-y">
      <div className="container">
        <div className="grid grid-cols-1 overflow-hidden rounded-md border border-brand-900/10 lg:grid-cols-[1.2fr_1fr]">
          <SiteImage
            src={STOCK.featuredProjectExterior}
            alt="Greenfield Commercial Complex exterior"
            className="h-[300px] lg:h-auto"
          />
          <div className="flex flex-col justify-center p-9 sm:p-12">
            <span className="eyebrow">Featured Project</span>
            <h2 className="mt-3 text-[28px] leading-tight text-brand-900">
              Greenfield Commercial Complex
            </h2>
            <p className="lede">
              A modern commercial development designed around efficiency,
              sustainability, and user experience.
            </p>
            <dl className="mt-6 flex flex-col gap-2.5 text-[13.5px]">
              <div className="flex gap-1.5">
                <dt className="font-bold text-brand-900">Location:</dt>
                <dd className="text-brand-500">Dhaka, Bangladesh</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="font-bold text-brand-900">Project Type:</dt>
                <dd className="text-brand-500">Commercial</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="font-bold text-brand-900">Services:</dt>
                <dd className="text-brand-500">Architecture + Structural + MEP</dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 border-b-2 border-gold-500 pb-0.5 text-sm font-semibold text-brand-900"
            >
              View Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
