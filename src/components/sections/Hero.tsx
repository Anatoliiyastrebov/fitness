"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_STATS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FictionBadge } from "@/components/ui/FictionBadge";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Fitness Training"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 dark:from-background dark:via-background/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container-narrow section-padding pt-32 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-accent text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Personal Training München
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-3xl"
        >
          Dein Körper.{" "}
          <span className="gradient-text">Dein Potenzial.</span>{" "}
          Jetzt entfesseln.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 text-lg text-muted max-w-xl leading-relaxed"
        >
          Individuelles 1:1 Coaching für Muskelaufbau, Fettabbau und nachhaltige
          Transformation – wissenschaftlich fundiert und auf dich zugeschnitten.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
          >
            Jetzt starten
            <ArrowRight size={18} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
          >
            Kostenloses Beratungsgespräch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 max-w-lg"
        >
          <div className="grid grid-cols-3 gap-6">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <FictionBadge label="Fiktive Beispielwerte" className="mt-4" />
        </motion.div>
      </div>
    </section>
  );
}
