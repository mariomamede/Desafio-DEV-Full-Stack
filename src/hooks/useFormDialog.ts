import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { setOpenDialog } from "@/store/features/interfaceSlice";

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
