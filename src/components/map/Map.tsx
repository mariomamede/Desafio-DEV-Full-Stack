import React, { useCallback, useMemo, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { LocationVehicle } from "@/types/vehicle";
import { useFleetIcons } from "@/hooks/useFleetIcons";
import { VehicleMarkers } from "./VehicleMarkers";
import { useVehicleLocations } from "@/hooks/useVehicleLocations";

export const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

interface MapProps {
  width: string;
  height: string;
  center: google.maps.LatLngLiteral | google.maps.LatLng;
  zoom?: number;
  children?: React.ReactNode;
}

/**
 * Componente de Mapa
 * @param {string} width - Largura do mapa
 * @param {string} height - Altura do mapa
 * @param {google.maps.LatLngLiteral | google.maps.LatLng} center - Centro do mapa
 * @param {number} [zoom=10] - Nível de zoom do mapa (padrão: 10)
 * @param {React.ReactNode} [children] - Elementos filhos a serem renderizados no mapa
 * @returns {JSX.Element} Componente de Mapa
 */
const Map: React.FC<MapProps> = ({
  width,
  height,
  center,
  zoom = 10,
  children,
}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedVehicle, setSelectedVehicle] =
    useState<LocationVehicle | null>(null);

  // Obter dados do Redux
  const { locationVehiclesList } = useVehicleLocations();

  // Hook personalizado para gerenciar ícones da frota
  const { fleetIconMap, getVehicleIcon } = useFleetIcons(locationVehiclesList);

  // Carregar API do Google Maps
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  // Callbacks para gerenciar o carregamento e desmontagem do mapa
  const handleMapLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const handleMapUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Handler para clique nos marcadores
  const handleMarkerClick = useCallback((vehicle: LocationVehicle) => {
    setSelectedVehicle(vehicle);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedVehicle(null);
  }, []);

  // Opções do mapa
  const currentMapOptions = useMemo(
    () => ({
      ...mapOptions,
      zoom,
    }),
    [zoom]
  );

  // Estilo do container do mapa
  const mapContainerStyle = useMemo(
    () => ({
      width,
      height,
      borderRadius: "15px",
    }),
    [width, height]
  );

  if (!isLoaded) {
    return (
      <div className="max-w-full animate-pulse">
        <div
          className={`block w-full mb-4 antialiased leading-tight tracking-normal bg-gray-300 rounded-xl h-${height.replace(
            "px",
            ""
          )}`}
        >
          &nbsp;
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      options={currentMapOptions}
      zoom={zoom}
      onLoad={handleMapLoad}
      onUnmount={handleMapUnmount}
      mapTypeId="roadmap"
    >
      {children}

      <VehicleMarkers
        vehicles={locationVehiclesList}
        getVehicleIcon={getVehicleIcon}
        selectedVehicle={selectedVehicle}
        onMarkerClick={handleMarkerClick}
        onCloseInfoWindow={handleCloseModal}
      />
    </GoogleMap>
  );
};

export default React.memo(Map);
