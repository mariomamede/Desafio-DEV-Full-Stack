import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./features/vehicleSlice";
import interfaceReducer from "./features/interfaceSlice";

export const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
    interface: interfaceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
