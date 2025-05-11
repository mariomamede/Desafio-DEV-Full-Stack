import { useVehicle } from "./useVehicle";

/**
 * Hook personalizado para obter a lista de veículos por localização.
 * @returns {Object} - Um objeto contendo a lista de veículos por localização.
 */
export const useVehicleLocations = () => {
  const { locationVehiclesList } = useVehicle();

  return {
    locationVehiclesList,
  };
};
