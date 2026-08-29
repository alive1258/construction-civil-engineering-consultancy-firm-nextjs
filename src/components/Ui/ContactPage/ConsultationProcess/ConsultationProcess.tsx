const STEPS = [
  { num: "01", title: "Submit Your Project" },
  { num: "02", title: "Initial Discussion" },
  { num: "03", title: "Technical Assessment" },
  { num: "04", title: "Proposal" },
  { num: "05", title: "Project Kickoff" },
];

const ConsultationProcess = () => {
  return (
    <section className="bg-brand-900 py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center text-gold-400">What Happens Next</span>
          <h2 className="mt-3 text-3xl text-white">Consultation Process</h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div className="pointer-events-none absolute inset-x-[10%] top-[26px] hidden h-px bg-white/15 lg:block" />
          {STEPS.map((step) => (
            <div key={step.num}>
              <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gold-500 font-display text-[15px] font-bold text-brand-900">
                {step.num}
              </div>
              <h3 className="text-[15.5px] font-semibold text-white">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;
