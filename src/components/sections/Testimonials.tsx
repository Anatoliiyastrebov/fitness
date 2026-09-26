"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { FictionBadge } from "@/components/ui/FictionBadge";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="bewertungen" className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Beispiel-Bewertungen · fiktiv"
            title="Was meine Kunden sagen"
            description="Fiktive Beispieltexte zur Demonstration dieser Website – keine echten Kundenbewertungen. Namen und Personen sind frei erfunden."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {TESTIMONIALS.map((t) => (
                  <div
                    key={t.id}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                  >
                    <div className="h-full rounded-3xl border border-border bg-card p-6 flex flex-col">
                      <div className="flex items-center justify-between gap-3">
                        <StarRating rating={t.rating} />
                        <FictionBadge />
                      </div>
                      <p className="mt-4 text-muted leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                      <div className="mt-6 flex items-center gap-3">
                        <span
                          aria-hidden
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20 font-semibold text-accent"
                        >
                          {t.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </span>
                        <div>
                          <p className="font-semibold">{t.name}</p>
                          <p className="text-sm text-muted">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={scrollPrev}
                className="p-3 rounded-full border border-border hover:border-accent transition-colors"
                aria-label="Zurück"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="p-3 rounded-full border border-border hover:border-accent transition-colors"
                aria-label="Weiter"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
