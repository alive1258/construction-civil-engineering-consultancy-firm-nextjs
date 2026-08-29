import { CheckCircle2 } from "lucide-react";
import SiteImage from "@/src/components/Ui/Shared/SiteImage";

interface ServiceSplitProps {
  id?: string;
  index: string;
  eyebrow: string;
  heading: string;
  lede?: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  alt?: boolean;
  columns?: boolean;
}

const ServiceSplit = ({
  id,
  index,
  eyebrow,
  heading,
  lede,
  items,
  imageSrc,
  imageAlt,
  reverse = false,
  alt = false,
  columns = false,
}: ServiceSplitProps) => {
  return (
    <section id={id} className={`section-y ${alt ? "bg-brand-50" : ""}`}>
      <div
        className={`container grid grid-cols-1 items-center gap-14 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <span className="eyebrow">
            {index} &middot; {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl leading-tight text-brand-900 sm:text-[32px]">
            {heading}
          </h2>
          {lede && <p className="lede">{lede}</p>}
          <ul
            className={`mt-7 grid grid-cols-1 gap-3.5 ${
              columns ? "sm:grid-cols-2" : ""
            }`}
          >
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14.5px] font-medium text-brand-900"
              >
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <SiteImage src={imageSrc} alt={imageAlt} className="h-[340px] rounded-md sm:h-[420px]" />
      </div>
    </section>
  );
};

export default ServiceSplit;
