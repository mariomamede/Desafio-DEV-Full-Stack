import { useVehicle } from "./useVehicle";

/**
 * useVehicleLocations Hook
 */
export const useVehicleLocations = () => {
  const { locationVehiclesList } = useVehicle();

  return {
    locationVehiclesList,
  };
};
