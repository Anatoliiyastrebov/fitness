"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { FictionBadge } from "@/components/ui/FictionBadge";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  name: string;
  duration: string;
  labelBefore: string;
  labelAfter: string;
  priority?: boolean;
}

const IMAGE_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

export function BeforeAfterSlider({
  before,
  after,
  name,
  duration,
  labelBefore,
  labelAfter,
  priority = false,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(98, Math.max(2, x)));
  }, []);

  const startDrag = useCallback(
    (clientX: number, pointerId: number, target: HTMLElement) => {
      setIsDragging(true);
      target.setPointerCapture(pointerId);
      updatePosition(clientX);
    },
    [updatePosition]
  );

  const endDrag = useCallback((pointerId: number, target: HTMLElement) => {
    setIsDragging(false);
    if (target.hasPointerCapture(pointerId)) {
      target.releasePointerCapture(pointerId);
    }
  }, []);

  const clipRight = 100 - position;

  return (
    <article className="group">
      <p className="mb-2 text-xs text-muted text-center sm:text-left">
        Halte und ziehe den Regler ↔
      </p>
      <div
        ref={containerRef}
        className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden select-none bg-neutral-900 ring-1 ring-border"
      >
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={after}
            alt={`Symbolbild (fiktiv), Nachher: ${labelAfter}`}
            fill
            priority={priority}
            sizes={IMAGE_SIZES}
            draggable={false}
            className="object-cover object-center brightness-105 contrast-105"
          />
        </div>

        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ clipPath: `inset(0 ${clipRight}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`Symbolbild (fiktiv), Vorher: ${labelBefore}`}
            fill
            priority={priority}
            sizes={IMAGE_SIZES}
            draggable={false}
            className="object-cover object-center saturate-[0.85] brightness-95"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 z-[2] w-1 -translate-x-1/2 bg-accent shadow-[0_0_20px_var(--accent-glow)] pointer-events-none transition-opacity"
          style={{ left: `${position}%`, opacity: isDragging ? 1 : 0.85 }}
          aria-hidden
        />

        <div
          className={`absolute top-1/2 z-[3] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-accent text-base font-bold text-black shadow-xl pointer-events-none transition-transform ${
            isDragging ? "scale-110" : "scale-100"
          }`}
          style={{ left: `${position}%` }}
          aria-hidden
        >
          ↔
        </div>

        <span className="absolute top-3 left-3 z-[4] max-w-[45%] rounded-md bg-black/80 px-2.5 py-1.5 text-[10px] sm:text-xs font-semibold text-white pointer-events-none leading-tight">
          Vorher
        </span>
        <span className="absolute top-3 right-3 z-[4] max-w-[45%] rounded-md bg-accent px-2.5 py-1.5 text-[10px] sm:text-xs font-semibold text-black pointer-events-none leading-tight text-right">
          Nachher
        </span>

        <FictionBadge
          label="Symbolbild · fiktiv"
          className="absolute bottom-3 left-1/2 z-[4] -translate-x-1/2 bg-black/80 text-amber-300 pointer-events-none"
        />

        {/* Interaktions-Layer: ziehen über gesamte Fläche + Griff */}
        <div
          role="slider"
          aria-label={`Vorher-Nachher-Vergleich für ${name}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          tabIndex={0}
          className="absolute inset-0 z-[10] cursor-ew-resize touch-none"
          style={{ touchAction: "none" }}
          onPointerDown={(e) => {
            e.preventDefault();
            startDrag(e.clientX, e.pointerId, e.currentTarget);
          }}
          onPointerMove={(e) => {
            if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
            e.preventDefault();
            updatePosition(e.clientX);
          }}
          onPointerUp={(e) => endDrag(e.pointerId, e.currentTarget)}
          onPointerCancel={(e) => endDrag(e.pointerId, e.currentTarget)}
          onLostPointerCapture={() => setIsDragging(false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              setPosition((p) => Math.max(2, p - 2));
            }
            if (e.key === "ArrowRight") {
              e.preventDefault();
              setPosition((p) => Math.min(98, p + 2));
            }
          }}
        />
      </div>

      <div className="mt-4 space-y-1">
        <p className="font-semibold">
          {name} <span className="text-xs font-normal text-muted">(fiktive Person)</span>
        </p>
        <p className="text-sm text-accent font-medium">{duration}</p>
        <p className="text-xs text-muted">
          <span className="text-foreground/70">Vorher:</span> {labelBefore}
        </p>
        <p className="text-xs text-muted">
          <span className="text-foreground/70">Nachher:</span> {labelAfter}
        </p>
      </div>
    </article>
  );
}
