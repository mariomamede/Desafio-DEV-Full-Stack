"use client";

import VehicleFormDialog from "@/components/shared/VehicleFormDialog";
import { useFormDialog } from "@/hooks/useFormDialog";
import { FilterSection } from "./FilterSection";
import { TrackingMapSection } from "./TrackingMapSection";
import { VehiclesTableSection } from "./VehiclesTableSection";
import { Container } from "./Container";

/**
 * HomeContent component
 * @returns HomeContent component
 */
const HomeContent: React.FC = () => {
  const { isOpenDialog, closeDialog } = useFormDialog();

  return (
    <Container>
      <FilterSection />
      <TrackingMapSection />
      <VehiclesTableSection />
      <VehicleFormDialog isOpen={isOpenDialog} onClose={closeDialog} />
    </Container>
  );
};

export default HomeContent;
