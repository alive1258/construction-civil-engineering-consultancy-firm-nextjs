import Link from "next/link";
import {
  Landmark,
  Wrench,
  Compass,
  BarChart3,
  Leaf,
  Search,
  Boxes,
  Calculator,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const SERVICES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Landmark,
    title: "Architecture",
    desc: "Innovative architectural design combining functionality, aesthetics, and sustainability.",
  },
  {
    icon: Wrench,
    title: "Structural Engineering",
    desc: "Safe, efficient, and resilient structural design for complex projects.",
  },
  {
    icon: Compass,
    title: "Civil Engineering",
    desc: "Comprehensive civil engineering solutions for buildings and infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Project Management",
    desc: "Professional planning, coordination, supervision, and project delivery.",
  },
  {
    icon: Leaf,
    title: "Environmental Engineering",
    desc: "Sustainable solutions designed to minimize environmental impact.",
  },
  {
    icon: Search,
    title: "Survey & Site Investigation",
    desc: "Accurate site assessment, surveying, and technical investigation.",
  },
  {
    icon: Boxes,
    title: "BIM & Digital Design",
    desc: "Advanced BIM, 3D modeling, and digital construction coordination.",
  },
  {
    icon: Calculator,
    title: "Cost & Quantity Consultancy",
    desc: "Accurate estimation, quantity surveying, and cost management.",
  },
];

const CoreServices = () => {
  return (
    <section className="section-y bg-brand-50">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">What We Do</span>
          <h2 className="mt-3 text-3xl text-brand-900">Our Core Services</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-md border border-brand-900/10 bg-white p-7"
            >
              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold text-brand-900">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-brand-500">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-b-2 border-gold-500 pb-0.5 text-sm font-semibold text-brand-900"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
