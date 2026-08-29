import { BadgeCheck } from "lucide-react";

const CERTS = [
  "[Professional Engineering License]",
  "[Institute of Architects Registration]",
  "[ISO 9001 Certification]",
  "[Professional Body Membership]",
];

const Certifications = () => {
  return (
    <section className="section-y">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">Recognized Standards</span>
          <h2 className="mt-3 text-3xl text-brand-900">
            Certifications &amp; Professional Memberships
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {CERTS.map((cert) => (
            <div
              key={cert}
              className="rounded-md border border-brand-900/10 bg-white p-7 text-center"
            >
              <span className="mx-auto flex h-[52px] w-[52px] items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
                <BadgeCheck size={23} />
              </span>
              <div className="mt-3.5 text-[13px] font-semibold leading-snug text-brand-900">
                {cert}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
