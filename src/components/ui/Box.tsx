import React from "react";
import { cn } from "@/lib/utils";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "small" | "medium" | "large";
  shadow?: "none" | "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  border?: boolean;
}

export const Box = ({
  children,
  className = "",
  padding = "medium",
  shadow = "none",
  rounded = "md",
  border = false,
}: BoxProps) => {
  const paddingMap = {
    none: "p-0",
    small: "p-2",
    medium: "p-4",
    large: "p-6",
  };

  const shadowMap = {
    none: "",
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
  };

  const roundedMap = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        paddingMap[padding],
        shadowMap[shadow],
        roundedMap[rounded],
        border ? "border border-[var(--border-color)]" : "",
        "bg-[var(--secondary)]",
        className
      )}
    >
      {children}
    </div>
  );
};
