import React from "react";

/**
 * Lazy load Header component
 */
export const LazyHeader = React.lazy(
  () => import("@/components/shared/Header")
);
