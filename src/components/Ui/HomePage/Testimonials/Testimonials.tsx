import { Quote, Star } from "lucide-react";
import SiteImage from "@/src/components/Ui/Shared/SiteImage";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const TESTIMONIALS = [
  {
    quote:
      "[Client testimonial highlighting the technical expertise, communication, and quality of the finished project.]",
    name: "[Client Name]",
    role: "[Company / Project Type]",
    src: STOCK.clients.client1,
  },
  {
    quote:
      "[Client testimonial describing how the team handled a complex or time-sensitive challenge on the project.]",
    name: "[Client Name]",
    role: "[Company / Project Type]",
    src: STOCK.clients.client2,
  },
  {
    quote:
      "[Client testimonial on the value of working with one integrated architecture and engineering team.]",
    name: "[Client Name]",
    role: "[Company / Project Type]",
    src: STOCK.clients.client3,
  },
];

const Testimonials = () => {
  return (
    <section className="section-y bg-brand-50">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">Client Feedback</span>
          <h2 className="mt-3 text-3xl text-brand-900">What Our Clients Say</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <div key={item.name} className="rounded-md border border-brand-900/10 bg-white p-8">
              <Quote size={26} className="text-gold-500/40" strokeWidth={1.5} />
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="mt-4 text-[14.5px] leading-relaxed text-brand-700">{item.quote}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-brand-900/10 pt-5">
                <SiteImage src={item.src} alt={item.name} className="h-11 w-11 shrink-0 rounded-full" />
                <div>
                  <div className="text-sm font-semibold text-brand-900">{item.name}</div>
                  <div className="text-xs text-brand-400">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
