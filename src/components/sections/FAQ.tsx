"use client";

import { FAQ_ITEMS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Häufig gestellte Fragen"
            description="Alles, was du vor deinem ersten Training wissen solltest."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Accordion items={FAQ_ITEMS} />
        </ScrollReveal>
      </div>
    </section>
  );
}
