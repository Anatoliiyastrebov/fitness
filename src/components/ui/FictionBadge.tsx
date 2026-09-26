import { cn } from "@/lib/utils";

interface FictionBadgeProps {
  label?: string;
  className?: string;
}

/** Kennzeichnet erfundene Inhalte (Bewertungen, Ergebnisse, Kennzahlen) dieser Demo-Website. */
export function FictionBadge({ label = "Fiktiv", className }: FictionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-amber-500/40 bg-amber-500/15 px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300",
        className
      )}
    >
      {label}
    </span>
  );
}
