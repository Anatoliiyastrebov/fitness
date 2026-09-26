"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { CERTIFICATES, SPECIALIZATIONS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FictionBadge } from "@/components/ui/FictionBadge";

export function About() {
  return (
    <section id="ueber-mich" className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Über mich"
            title="Markus Weber – Dein Personal Trainer"
            description="Mit Leidenschaft, Erfahrung und einem ganzheitlichen Ansatz begleite ich dich auf deinem Weg zu deinem besten Ich."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop"
                alt="Symbolbild eines Personal Trainers (Stockfoto)"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
              <FictionBadge
                label="Symbolbild · fiktive Person"
                className="absolute bottom-4 left-4 bg-black/80 text-amber-300"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <p className="text-muted leading-relaxed">
                Seit über 10 Jahren helfe ich Menschen in München und online, ihre
                Fitnessziele zu erreichen. Mein Ansatz verbindet effektives Krafttraining,
                funktionelle Bewegung und evidenzbasierte Ernährung – ohne Quick-Fix-Versprechen.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Ob du Muskeln aufbauen, Fett verlieren oder deinen Lebensstil nachhaltig
                verändern willst: Gemeinsam entwickeln wir einen Plan, der zu dir passt.
              </p>

              <h3 className="mt-8 font-semibold text-lg">Spezialisierung</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {SPECIALIZATIONS.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <Check size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 flex items-center gap-3 font-semibold text-lg">
                Zertifikate <FictionBadge label="Fiktive Beispiele" />
              </h3>
              <ul className="mt-4 space-y-2">
                {CERTIFICATES.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-sm text-muted">
                    <Check size={16} className="text-accent shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
