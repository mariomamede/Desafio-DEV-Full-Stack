import React from "react";
import { Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Box } from "@/components/ui/Box";
import Map from "@/components/map/Map";
import { useVehicle } from "@/hooks/useVehicle";

// Coordenadas do centro do mapa
const MAP_CENTER = {
  lat: -22.558228864927507,
  lng: -47.40859903725707,
};

const MAP_ZOOM = 8;

/**
 * Componente de seção do mapa de rastreamento.
 * Exibe um mapa com a localização dos veículos rastreados.
 * @returns {JSX.Element} Componente de seção do mapa de rastreamento.
 */
export const TrackingMapSection: React.FC = () => {
  const { isTracking, lastUpdate } = useSelector(
    (state: RootState) => state.interface
  );
  const { error, locationVehiclesList } = useVehicle();

  if (error) {
    console.error("Error loading vehicles:", error);
    return (
      <div className="flex justify-center items-center p-8 bg-red-50 rounded-lg text-red-600">
        Erro ao carregar mapa de rastreamento. Tente novamente mais tarde.
      </div>
    );
  }

  return (
    <Transition
      show={isTracking}
      as="div"
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Box className="mt-6 rounded-2xl" border={true}>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3>Mapa Rastreador</h3>
            <Transition show={!!lastUpdate} as="div">
              <p className="text-sm font-light text-gray-500">
                Ultima atualização: {lastUpdate}
              </p>
            </Transition>
          </div>
          {locationVehiclesList?.length > 0 && (
            <p className="font-light text-gray-500 me-4">
              Total: {locationVehiclesList.length}
            </p>
          )}
        </div>
        <Map width="auto" height="500px" center={MAP_CENTER} zoom={MAP_ZOOM} />
      </Box>
    </Transition>
  );
};
