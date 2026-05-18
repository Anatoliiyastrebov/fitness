"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { SITE } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Kontakt"
            title="Bereit für deine Transformation?"
            description="Buche jetzt dein kostenloses 30-minütiges Beratungsgespräch – unverbindlich und persönlich."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Dein Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="deine@email.de"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Erzähl mir von deinen Zielen..."
                />
              </div>
              {sent ? (
                <p className="text-accent text-sm font-medium">
                  Vielen Dank! Dies ist eine Demo – in der Live-Version würde deine Nachricht gesendet.
                </p>
              ) : (
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Nachricht senden
                  <Send size={18} />
                </Button>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="space-y-6">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-accent transition-colors group">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Phone size={22} />
                </span>
                <div>
                  <p className="text-sm text-muted">Telefon</p>
                  <p className="font-semibold group-hover:text-accent transition-colors">{SITE.phone}</p>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-accent transition-colors group">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Mail size={22} />
                </span>
                <div>
                  <p className="text-sm text-muted">E-Mail</p>
                  <p className="font-semibold group-hover:text-accent transition-colors">{SITE.email}</p>
                </div>
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-accent transition-colors group">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <InstagramIcon size={22} />
                </span>
                <div>
                  <p className="text-sm text-muted">Instagram</p>
                  <p className="font-semibold group-hover:text-accent transition-colors">@vitalpeak_coaching</p>
                </div>
              </a>
              <div className="rounded-2xl border border-border overflow-hidden h-56 bg-card flex items-center justify-center">
                <div className="text-center text-muted">
                  <MapPin size={32} className="mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">Google Maps Platzhalter</p>
                  <p className="text-xs mt-1">{SITE.city}, Deutschland</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
