"use client";

import { BEFORE_AFTER } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

export function BeforeAfter() {
  return (
    <section id="ergebnisse" className="section-padding bg-card/50">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Vorher / Nachher"
            title="Echte Transformationen"
            description="Drei Kunden, drei Wege: vom Alltag zum sportlichen Körpergefühl. Ziehe den Regler, um Vorher und Nachher zu vergleichen."
          />
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BEFORE_AFTER.map((item, i) => (
            <BeforeAfterSlider
              key={item.id}
              before={item.before}
              after={item.after}
              name={item.name}
              duration={item.duration}
              labelBefore={item.labelBefore}
              labelAfter={item.labelAfter}
              priority={i < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
