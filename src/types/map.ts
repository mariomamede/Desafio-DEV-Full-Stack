import { LocationVehicle } from "./vehicle";

export interface FleetIconMap {
  [fleetId: string]: google.maps.Icon;
}

export interface VehicleClusterData {
  vehicles: LocationVehicle[];
  center: google.maps.LatLngLiteral;
  count: number;
}
