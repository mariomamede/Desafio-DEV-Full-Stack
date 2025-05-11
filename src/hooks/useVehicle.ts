import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchVehicles, setPage } from "../store/features/vehicleSlice";
import { setLastUpdate } from "@/store/features/interfaceSlice";

/**
 * Hook para gerenciar o estado dos veículos.
 * @returns {Object} Objeto contendo o estado dos veículos e funções para carregar veículos e mudar de página.
 */
export const useVehicle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const vehicleState = useSelector((state: RootState) => state.vehicle);
  const isSerching = useSelector(
    (state: RootState) => state.interface.isSerching
  );

  const loadVehicles = (
    page: number = 1,
    type: string = "tracked",
    perPage: number = 10
  ) => {
    dispatch(fetchVehicles({ page, type, perPage }));
    dispatch(setLastUpdate(new Date().toLocaleString()));
  };

  const changePage = (page: number) => {
    dispatch(setPage(page));
    loadVehicles(page);
  };

  if (isSerching) {
    return {
      ...vehicleState,
      loadVehicles: () => {},
      changePage: () => {},
    };
  }

  return {
    ...vehicleState,
    loadVehicles,
    changePage,
  };
};
