import React from "react";

import { LocationVehicle } from "@/types/vehicle";
import { formatDate } from "@/lib/utils";
import Modal from "../ui/Modal";

interface VehicleInfoModalProps {
  vehicle: LocationVehicle;
  onClose: () => void;
}

/**
 * Componente de modal para exibir informações do veículo
 * @param {LocationVehicle} vehicle - Objeto que contém as informações do veículo
 * @param {() => void} onClose - Função chamada ao fechar o modal
 * @returns {JSX.Element} Componente de modal com informações do veículo
 */
export const VehicleInfoModal: React.FC<VehicleInfoModalProps> = ({
  vehicle,
  onClose,
}) => {
  return (
    <Modal
      hasCloseButton
      onClose={onClose}
      showArrow
      arrowPosition="bottom"
      border
      rounded="lg"
      className="w-[200px] text-center"
    >
      <div className="flex flex-col space-y-2">
        <span>Placa: {vehicle.plate}</span>
        <span>Frota: {vehicle.fleet}</span>
        <span>{formatDate(vehicle.createdAt)}</span>
        <span>{`${vehicle.lat.toFixed(6)}, ${vehicle.lng.toFixed(6)}`}</span>
      </div>
    </Modal>
  );
};
