const STAGES = [
  {
    label: "Challenge",
    title: "Constrained Site, Ambitious Brief",
    desc: "The client needed a high-occupancy commercial destination on a tight urban plot with limited road access and a shallow water table.",
  },
  {
    label: "Our Approach",
    title: "One Integrated Team",
    desc: "Architecture, structural, and civil teams worked from a single coordinated model from day one, resolving conflicts before they reached site.",
  },
  {
    label: "Solution",
    title: "Architecture + Structural + Civil + MEP",
    desc: "A phased foundation strategy, efficient structural grid, and integrated MEP routing kept the build compact without compromising floor plates.",
  },
  {
    label: "Result",
    title: "On Budget, Ahead of Schedule",
    desc: "Delivered under the original cost plan with full pre-leasing achieved before handover, and a verified reduction in operational energy use.",
  },
];

const CaseStudy = () => {
  return (
    <section className="section-y">
      <div className="container">
        <span className="eyebrow">Case Study</span>
        <h2 className="mt-3 max-w-xl text-3xl leading-tight text-brand-900">
          Greenfield Commercial Complex
        </h2>
        <p className="lede">
          A closer look at how our multidisciplinary team took this project
          from an underused industrial plot to a fully leased commercial
          destination.
        </p>

        <div className="mt-11 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-brand-900/10 bg-brand-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage) => (
            <div key={stage.label} className="bg-white p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-gold-600">
                {stage.label}
              </div>
              <h3 className="mt-3 text-[17px] font-semibold text-brand-900">{stage.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-brand-500">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
