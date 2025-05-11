import React from "react";
import { Marker, InfoBox } from "@react-google-maps/api";
import { LocationVehicle } from "@/types/vehicle";
import { VehicleInfoModal } from "./VehicleInfoModal";

interface VehicleMarkersProps {
  vehicles: LocationVehicle[];
  getVehicleIcon: (fleet: string) => google.maps.Icon;
  selectedVehicle: LocationVehicle | null;
  onMarkerClick: (vehicle: LocationVehicle) => void;
  onCloseInfoWindow: () => void;
}

/**
 * Componente para exibir marcadores de veículos no mapa
 * @param {VehicleMarkersProps} props - Propriedades do componente
 * @returns {JSX.Element} Marcadores de veículos
 */
export const VehicleMarkers: React.FC<VehicleMarkersProps> = ({
  vehicles,
  getVehicleIcon,
  selectedVehicle,
  onMarkerClick,
  onCloseInfoWindow,
}) => {
  return (
    <>
      {vehicles.map((vehicle: LocationVehicle, index: number) => (
        <Marker
          key={`${vehicle.id}-${index}`}
          icon={getVehicleIcon(vehicle.fleet)}
          position={{
            lat: vehicle.lat,
            lng: vehicle.lng,
          }}
          onClick={() => onMarkerClick(vehicle)}
        />
      ))}

      {selectedVehicle && (
        <InfoBox
          options={{
            closeBoxURL: "",
            enableEventPropagation: true,
            pixelOffset: new google.maps.Size(-100, -150),
          }}
          position={
            new google.maps.LatLng(selectedVehicle.lat, selectedVehicle.lng)
          }
        >
          <VehicleInfoModal
            vehicle={selectedVehicle}
            onClose={onCloseInfoWindow}
          />
        </InfoBox>
      )}
    </>
  );
};
