import { Landmark, Wrench, BarChart3, Info, type LucideIcon } from "lucide-react";

const DEPARTMENTS: { icon: LucideIcon; title: string; email: string }[] = [
  { icon: Landmark, title: "Architecture", email: "architecture@company.com" },
  { icon: Wrench, title: "Engineering", email: "engineering@company.com" },
  { icon: BarChart3, title: "Projects", email: "projects@company.com" },
  { icon: Info, title: "General", email: "info@company.com" },
];

const Departments = () => {
  return (
    <section className="section-y">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">Direct Lines</span>
          <h2 className="mt-3 text-3xl text-brand-900">Departments</h2>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DEPARTMENTS.map(({ icon: Icon, title, email }) => (
            <a
              key={title}
              href={`mailto:${email}`}
              className="rounded-md border border-brand-900/10 bg-white p-7 transition hover:border-gold-500/50"
            >
              <span className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-[16.5px] font-semibold text-brand-900">{title}</h3>
              <p className="mt-1.5 text-sm font-semibold text-gold-600">{email}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
