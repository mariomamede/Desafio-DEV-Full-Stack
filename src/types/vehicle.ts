// src/types/vehicle.ts
export interface Vehicle {
  id: string;
  plate: string;
  fleet: string | null;
  type: string;
  model: string;
  nameOwner: string;
  status: string;
  createdAt: string;
}

export interface LocationVehicle {
  id: string;
  fleet: string;
  equipmentId: string;
  name: string;
  plate: string;
  ignition: string;
  lat: number;
  lng: number;
  createdAt: string;
}

export interface VehicleResponse {
  statusCode: number;
  message: string;
  content: {
    vehicles: Vehicle[];
    locationVehicles: LocationVehicle[];
    totalPages: number;
    page: number;
    perPage: number;
  };
}

export interface VehicleParams {
  page: number;
  type: string;
  perPage?: number;
}
