const SUB_DISCIPLINES = ["Architecture", "Structural Engineering", "Civil Engineering"];

const EXPERTISE_AREAS = [
  "Architecture",
  "Structural Engineering",
  "Civil Engineering",
  "MEP Engineering",
  "Transportation",
  "Water & Environment",
  "Project Management",
  "BIM",
];

const Expertise = () => {
  return (
    <section className="section-y">
      <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-md border border-brand-900/10 bg-white p-8 sm:p-11">
          <div className="rounded-sm bg-brand-900 py-3.5 text-center font-display text-sm font-bold uppercase tracking-wider text-white">
            Engineering
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SUB_DISCIPLINES.map((item) => (
              <div
                key={item}
                className="rounded-sm bg-brand-50 py-3.5 text-center text-sm font-semibold text-brand-900"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-sm bg-brand-900 py-3.5 text-center font-display text-sm font-bold uppercase tracking-wider text-white">
            Project Management
          </div>
          <div className="mt-5 rounded-sm bg-gold-500 py-3.5 text-center font-display text-sm font-bold uppercase tracking-wider text-brand-900">
            Project Delivery
          </div>
        </div>

        <div>
          <span className="eyebrow">Capability</span>
          <h2 className="mt-3 text-3xl leading-tight text-brand-900 sm:text-[32px]">
            Multidisciplinary Engineering Under One Roof
          </h2>
          <p className="lede">
            Every discipline works from the same technical model and the
            same project brief, so decisions made in architecture,
            structure, and civil works stay aligned all the way through
            delivery.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {EXPERTISE_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-900"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
