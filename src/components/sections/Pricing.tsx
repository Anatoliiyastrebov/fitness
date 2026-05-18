"use client";

import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="angebote" className="section-padding bg-card/50">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Trainingsangebote"
            title="Wähle dein Paket"
            description="Transparente Preise, klare Leistungen – finde das Coaching, das zu deinen Zielen passt."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 0.1}>
              <div
                className={cn(
                  "relative flex flex-col h-full rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1",
                  plan.highlighted
                    ? "border-accent bg-card shadow-[0_0_40px_var(--accent-glow)]"
                    : "border-border bg-card hover:border-accent/50"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-accent text-black rounded-full">
                    Beliebt
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold">{plan.price}€</span>
                  <span className="text-muted text-sm">{plan.period}</span>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full"
                  variant={plan.highlighted ? "primary" : "outline"}
                  onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {plan.cta}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
