import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  label?: string;
}

/**
 * Um componente divisor simples que pode ser usado para separar conteúdos.
 * @param {string} className - Classes adicionais para estilização.
 * @param {string} orientation - Orientação do divisor, pode ser "horizontal" ou "vertical".
 * @param {string} label - Rótulo opcional para exibir no divisor.
 */
export default function Divider({
  className = "",
  orientation = "horizontal",
  label,
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div className={cn("flex items-center h-full", className)}>
        <div className="h-full w-px bg-[var(--border-color)]" />
        {label && <span className="px-2 text-sm">{label}</span>}
      </div>
    );
  }

  if (label) {
    return (
      <div className={cn("flex items-center w-full my-4", className)}>
        <div className="flex-grow h-px bg-[var(--border-color)]" />
        <span className="px-3 text-sm">{label}</span>
        <div className="flex-grow h-px bg-[var(--border-color)]" />
      </div>
    );
  }

  return (
    <div
      className={cn("w-full h-px bg-[var(--border-color)] my-4", className)}
    />
  );
}
