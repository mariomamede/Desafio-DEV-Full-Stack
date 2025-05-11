import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import vehicleService from "../../services/vehicleService";
import { Vehicle, LocationVehicle, VehicleParams } from "../../types/vehicle";

interface VehicleState {
  vehicles: Vehicle[];
  vehiclesList: Vehicle[];
  locationVehicles: LocationVehicle[];
  locationVehiclesList: LocationVehicle[];
  totalPages: number;
  currentPage: number;
  perPage: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: VehicleState = {
  vehicles: [],
  vehiclesList: [],
  locationVehicles: [],
  locationVehiclesList: [],
  totalPages: 0,
  currentPage: 1,
  perPage: 10,
  isLoading: false,
  error: null,
};

// Thunk para buscar veículos
export const fetchVehicles = createAsyncThunk(
  "vehicle/fetchVehicles",
  async (params: VehicleParams, { rejectWithValue }) => {
    try {
      const response = await vehicleService.getVehiclesWithPaginate(params);
      return response.content;
    } catch (error) {
      return rejectWithValue("Falha ao carregar veículos" + error);
    }
  }
);

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setVehicles(state, action: PayloadAction<Vehicle[]>) {
      state.vehiclesList = action.payload;
    },
    setLocationVehicles(state, action: PayloadAction<LocationVehicle[]>) {
      state.locationVehiclesList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        const { vehicles, locationVehicles, totalPages, page, perPage } =
          action.payload;

        state.vehicles =
          page === 1 ? vehicles : [...state.vehicles, ...vehicles];

        state.vehiclesList = [...state.vehicles];

        state.locationVehicles =
          page === 1
            ? locationVehicles
            : [...state.locationVehicles, ...locationVehicles];

        state.locationVehiclesList = [...state.locationVehicles];

        state.totalPages = totalPages;
        state.currentPage = page;
        state.perPage = perPage;
        state.isLoading = false;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage, setVehicles, setLocationVehicles } =
  vehicleSlice.actions;
export default vehicleSlice.reducer;
