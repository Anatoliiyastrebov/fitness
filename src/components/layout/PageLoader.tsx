"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <motion.div
        className="h-12 w-12 rounded-full border-2 border-border border-t-accent"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
      <motion.p
        className="mt-6 font-display text-xl font-bold tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {SITE.name}
      </motion.p>
    </div>
  );
}
