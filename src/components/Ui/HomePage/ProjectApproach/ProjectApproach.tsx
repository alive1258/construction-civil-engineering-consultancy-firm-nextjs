const STEPS = [
  { num: "01", title: "Understand", desc: "We understand your project requirements, goals, budget, and constraints." },
  { num: "02", title: "Plan", desc: "Our multidisciplinary team develops the project strategy." },
  { num: "03", title: "Design", desc: "We develop architectural, structural, and engineering solutions." },
  { num: "04", title: "Deliver", desc: "We support implementation, supervision, and project coordination." },
  { num: "05", title: "Optimize", desc: "We continuously improve quality, efficiency, cost, and sustainability." },
];

const ProjectApproach = () => {
  return (
    <section className="section-y">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">How We Work</span>
          <h2 className="mt-3 text-3xl text-brand-900">Our Project Approach</h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div className="pointer-events-none absolute inset-x-[10%] top-[26px] hidden h-px bg-brand-900/10 lg:block" />
          {STEPS.map((step) => (
            <div key={step.num}>
              <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand-900 font-display text-[15px] font-bold text-white">
                {step.num}
              </div>
              <h3 className="text-base font-semibold text-brand-900">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-brand-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectApproach;
