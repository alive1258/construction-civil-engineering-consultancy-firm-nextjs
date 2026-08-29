"use client";

import { useState } from "react";

const CATEGORIES = [
  "All",
  "Architecture",
  "Structural",
  "Civil",
  "Infrastructure",
  "Industrial",
  "Residential",
  "Commercial",
  "Institutional",
];

const CategoryTabs = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="border-b border-brand-900/10">
      <div className="container flex flex-wrap gap-2.5 py-6">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-[13.5px] font-semibold transition ${
              active === category
                ? "border-brand-900 bg-brand-900 text-white"
                : "border-brand-900/15 text-brand-500 hover:border-brand-900/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryTabs;
