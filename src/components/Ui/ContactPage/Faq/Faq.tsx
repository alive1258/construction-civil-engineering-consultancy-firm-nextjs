"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "What types of projects do you handle?",
    a: "We handle residential, commercial, industrial, infrastructure, and institutional projects of varying scale, from single buildings to multi-phase developments.",
  },
  {
    q: "Do you provide complete design and engineering services?",
    a: "Yes — architecture, structural, civil, and MEP engineering are delivered by one coordinated in-house team.",
  },
  {
    q: "Can you manage projects from concept to completion?",
    a: "Yes. Our project management and supervision services cover the full lifecycle, from feasibility through construction support and handover.",
  },
  {
    q: "Do you provide structural assessments?",
    a: "Yes, including structural assessment and rehabilitation for existing buildings and infrastructure.",
  },
  {
    q: "Do you offer BIM services?",
    a: "Yes — BIM modeling, 3D coordination, clash detection, and quantity extraction are part of our digital engineering offering.",
  },
  {
    q: "Can you work with international clients?",
    a: "Yes, we regularly coordinate with international clients and partners across time zones and regulatory frameworks.",
  },
  {
    q: "How do we start a project?",
    a: "Submit the consultation form above or email us directly — we'll schedule an initial discussion within one business day.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-y bg-brand-50">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">FAQ</span>
          <h2 className="mt-3 text-3xl text-brand-900">Frequently Asked Questions</h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-brand-900/10 py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-brand-900"
                >
                  {item.q}
                  <Plus
                    size={18}
                    className={`shrink-0 text-gold-600 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3.5 max-w-2xl text-[14.5px] leading-relaxed text-brand-500">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
