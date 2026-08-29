import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const MEMBERS = [
  { role: "Managing Director", src: STOCK.team.managingDirector },
  { role: "Chief Engineer", src: STOCK.team.chiefEngineer },
  { role: "Lead Architect", src: STOCK.team.leadArchitect },
  { role: "Structural Engineer", src: STOCK.team.structuralEngineer },
  { role: "Civil Engineer", src: STOCK.team.civilEngineer },
  { role: "Project Manager", src: STOCK.team.projectManager },
];

const Team = () => {
  return (
    <section id="team" className="section-y bg-brand-50">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">Leadership</span>
          <h2 className="mt-3 text-3xl text-brand-900">Our Team</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map(({ role, src }) => (
            <div key={role} className="overflow-hidden rounded-md border border-brand-900/10 bg-white">
              <SiteImage src={src} alt={role} className="h-[220px]" />
              <div className="p-6">
                <h3 className="text-[16.5px] font-semibold text-brand-900">[Full Name]</h3>
                <div className="mt-1.5 text-xs font-bold uppercase tracking-wide text-gold-600">
                  {role}
                </div>
                <div className="mt-2.5 border-t border-brand-900/10 pt-2.5 text-xs text-brand-500">
                  [Professional Qualification]
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
