import React from "react";
import Filter from "@/components/shared/FilterSection";
import { Divider } from "@/components/ui/Divider";

/**
 * FilterSection Component
 */
export const FilterSection: React.FC = () => {
  return (
    <>
      <Filter />
      <Divider className="my-2" />
    </>
  );
};
