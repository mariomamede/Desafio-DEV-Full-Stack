import React from "react";

// Lazy loaded components
export const LazyHeader = React.lazy(
  () => import("@/components/shared/Header")
);
