// components/Reveal.tsx
"use client";
// ! Reveal is client side animation

import { useReveal } from "@/utils/hooks/useReveal";

export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { inView, ref } = useReveal();

  return (
    <div
      className={`transition-all duration-600 ease-[cubic-bezier(.16,1,.3,1)] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: "100ms" }}
    >
      {children}
    </div>
  );
}
