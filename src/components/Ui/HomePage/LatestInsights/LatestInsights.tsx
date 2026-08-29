import { ArrowRight, ArrowUpRight } from "lucide-react";
import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const ARTICLES = [
  {
    src: STOCK.insights.hybridStructuralSystems,
    category: "Structural Engineering",
    title: "Why Hybrid Structural Systems Are Gaining Ground in Commercial Design",
  },
  {
    src: STOCK.insights.bimAdoption,
    category: "Digital Engineering",
    title: "BIM Adoption: What Growing Firms Need to Know Before Scaling Up",
  },
  {
    src: STOCK.insights.coastalInfrastructure,
    category: "Civil Engineering",
    title: "Designing for Climate Resilience in Coastal Infrastructure",
  },
];

const LatestInsights = () => {
  return (
    <section className="section-y">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">Insights</span>
          <h2 className="mt-3 text-3xl text-brand-900">Latest News &amp; Insights</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <a
              key={article.title}
              href="#"
              className="group overflow-hidden rounded-md border border-brand-900/10 bg-white transition hover:border-gold-500/50"
            >
              <SiteImage src={article.src} alt={article.title} className="h-[190px]" />
              <div className="p-6">
                <div className="text-[10.5px] font-bold uppercase tracking-wide text-gold-600">
                  {article.category}
                </div>
                <h3 className="mt-2.5 text-[16px] font-semibold leading-snug text-brand-900">
                  {article.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-900">
                  Read More
                  <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b-2 border-gold-500 pb-0.5 text-sm font-semibold text-brand-900"
          >
            View All Insights <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
