import { CheckCircle2 } from "lucide-react";
import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const HIGHLIGHTS = [
  "Multidisciplinary Expertise",
  "Technical Excellence",
  "Sustainable Design",
  "Client-Focused Approach",
];

const Introduction = () => {
  return (
    <section className="section-y">
      <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <SiteImage
          src={STOCK.engineersReviewingPlans}
          alt="Engineers reviewing architectural drawings"
          className="h-[380px] rounded-md lg:h-[440px]"
        />
        <div>
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-3 text-3xl leading-tight text-brand-900 sm:text-[32px]">
            Integrated Expertise. From Concept to Completion.
          </h2>
          <p className="lede">
            We provide multidisciplinary engineering, architectural, and
            civil consultancy services for residential, commercial,
            industrial, and infrastructure projects. Our team combines
            technical expertise, creative design, and practical project
            knowledge to deliver solutions that are safe, efficient,
            sustainable, and built for long-term value.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2.5 text-sm font-semibold text-brand-900"
              >
                <CheckCircle2 size={18} className="shrink-0 text-gold-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
