import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useVehicle } from "./useVehicle";

const POLLING_INTERVAL = 120000; // 2 minutes

/**
 * useVehicleData Hook
 */
export const useVehicleData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { loadVehicles } = useVehicle();
  const { isTracking } = useSelector((state: RootState) => state.interface);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await loadVehicles(1, isTracking ? "tracked" : "others");
      setIsLoading(false);
    };

    // Initial load
    fetchData();

    // Set up polling interval
    const interval = setInterval(() => {
      fetchData();
    }, POLLING_INTERVAL);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  return { isLoading };
};
