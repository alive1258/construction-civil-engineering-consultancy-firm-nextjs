import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const PROJECTS = [
  {
    src: STOCK.commercialComplex,
    title: "Modern Commercial Complex",
    tags: ["Architecture", "Structural"],
    meta: "Architecture + Structural Engineering",
  },
  {
    src: STOCK.industrialFacility,
    title: "Industrial Facility",
    tags: ["Civil", "MEP"],
    meta: "Civil + Structural + MEP",
  },
  {
    src: STOCK.residentialDevelopment,
    title: "Residential Development",
    tags: ["Residential", "PM"],
    meta: "Architecture + Engineering + Project Management",
  },
  {
    src: STOCK.boutiqueHotel,
    title: "Boutique Hotel & Spa Resort",
    tags: ["Hospitality", "Architecture"],
    meta: "Architecture + MEP + Interior Planning",
  },
  {
    src: STOCK.highwayInterchange,
    title: "Highway Interchange Upgrade",
    tags: ["Infrastructure", "Civil"],
    meta: "Civil Engineering + Survey + Traffic Planning",
  },
  {
    src: STOCK.manufacturingPlant,
    title: "Automated Manufacturing Plant",
    tags: ["Industrial", "MEP"],
    meta: "Structural + Civil + MEP Engineering",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="section-y bg-brand-50">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">Our Work</span>
          <h2 className="mt-3 text-3xl text-brand-900">Featured Projects</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map(({ src, title, tags, meta }) => (
            <div
              key={title}
              className="overflow-hidden rounded-md border border-brand-900/10 bg-white"
            >
              <SiteImage src={src} alt={title} className="h-[220px]" />
              <div className="p-6">
                <div className="mb-3 flex gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-gold-500/15 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-gold-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[19px] font-semibold text-brand-900">{title}</h3>
                <div className="mt-3 border-t border-brand-900/10 pt-3.5 text-[12.5px] text-brand-500">
                  {meta}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border-b-2 border-gold-500 pb-0.5 text-sm font-semibold text-brand-900"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
