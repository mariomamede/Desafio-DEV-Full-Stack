import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { setOpenDialog } from "@/store/features/interfaceSlice";

/**
 * Hook para gerenciar o estado do diálogo de formulário.
 * @returns {Object} Objeto contendo o estado do diálogo e funções para abri-lo e fechá-lo.
 */
export const useFormDialog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpenDialog = useSelector(
    (state: RootState) => state.interface.openDialog
  );

  const openDialog = () => {
    dispatch(setOpenDialog(true));
  };

  const closeDialog = () => {
    dispatch(setOpenDialog(false));
  };

  return {
    isOpenDialog,
    openDialog,
    closeDialog,
  };
};
