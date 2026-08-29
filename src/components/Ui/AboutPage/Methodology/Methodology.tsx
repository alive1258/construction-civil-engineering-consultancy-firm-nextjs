const STEPS = [
  "Client Brief",
  "Feasibility",
  "Concept Design",
  "Detailed Engineering",
  "Approval",
  "Construction Support",
  "Project Completion",
];

const Methodology = () => {
  return (
    <section className="section-y bg-brand-50">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">Our Process</span>
          <h2 className="mt-3 text-3xl text-brand-900">Our Methodology</h2>
        </div>

        <div className="relative mx-auto mt-12 flex max-w-xl flex-col">
          <span className="absolute left-6 top-6 bottom-6 w-px -translate-x-1/2 bg-brand-900/10" />
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <div key={step} className="relative flex items-center gap-6 py-3">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${
                    isLast ? "bg-gold-500 text-brand-900" : "bg-brand-900 text-white"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="text-lg font-semibold text-brand-900">{step}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
