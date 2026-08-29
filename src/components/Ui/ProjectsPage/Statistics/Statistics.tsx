const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "25+", label: "Years Experience" },
  { value: "15+", label: "Countries / Regions" },
  { value: "50+", label: "Technical Professionals" },
];

const Statistics = () => {
  return (
    <section className="bg-brand-900 py-16 sm:py-20">
      <div className="container grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-4xl font-bold text-white sm:text-[46px]">
              {stat.value}
            </div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/50">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
