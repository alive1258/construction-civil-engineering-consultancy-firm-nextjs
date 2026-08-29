const ClientLogos = () => {
  return (
    <section className="section-y">
      <div className="container text-center">
        <span className="eyebrow justify-center">Trusted Partners</span>
        <h2 className="mx-auto mt-3 max-w-xl text-3xl text-brand-900">
          Trusted by Organizations Across Multiple Sectors
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex h-[90px] items-center justify-center rounded-md border border-dashed border-brand-900/20 bg-brand-50 text-[11px] font-semibold uppercase tracking-wide text-brand-300"
            >
              Client Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
