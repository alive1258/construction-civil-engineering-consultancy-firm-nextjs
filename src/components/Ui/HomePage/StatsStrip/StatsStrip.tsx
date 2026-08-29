const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "25+", label: "Years Experience" },
  { value: "15+", label: "Countries / Regions" },
  { value: "50+", label: "Technical Professionals" },
];

const StatsStrip = () => {
  return (
    <section className="border-y border-brand-900/10 bg-white py-12">
      <div className="container grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-brand-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
