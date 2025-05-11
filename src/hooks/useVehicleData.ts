import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useVehicle } from "./useVehicle";

const POLLING_INTERVAL = 120000; // 2 minutes

/**
 * Hook personalizado para buscar dados de veículos e gerenciar o estado de carregamento.
 * Ele busca os dados dos veículos a cada 2 minutos e atualiza o estado de carregamento conforme necessário.
 * @returns {Object} - Um objeto contendo o estado de carregamento.
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

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, POLLING_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return { isLoading };
};
