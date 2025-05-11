import React from "react";
import VehicleDataTable from "@/components/shared/VehicleDataTable";

/**
 *  Componente VehiclesTableSection
 * @returns Uma seção que contém uma tabela de veículos.
 */
export const VehiclesTableSection: React.FC = () => {
  return (
    <div className="mt-6">
      <VehicleDataTable />
    </div>
  );
};
