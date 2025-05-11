import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InterfaceState {
  isTracking: boolean;
  lastUpdate: string;
  isSerching: boolean;
  openDialog: boolean;
}

const initialState: InterfaceState = {
  isTracking: true,
  lastUpdate: "",
  isSerching: false,
  openDialog: false,
};

const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    setIsTracking(state, action: PayloadAction<boolean>) {
      state.isTracking = action.payload;
    },
    setLastUpdate(state, action: PayloadAction<string>) {
      state.lastUpdate = action.payload;
    },
    setIsSerching(state, action: PayloadAction<boolean>) {
      state.isSerching = action.payload;
    },
    setOpenDialog(state, action: PayloadAction<boolean>) {
      state.openDialog = action.payload;
    },
  },
});

export const { setIsTracking, setLastUpdate, setIsSerching, setOpenDialog } =
  interfaceSlice.actions;
export default interfaceSlice.reducer;
