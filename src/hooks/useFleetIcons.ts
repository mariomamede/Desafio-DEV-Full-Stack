import { useState, useEffect, useCallback, useMemo } from "react";
import { LocationVehicle } from "@/types/vehicle";
import { createTruckIcon } from "@/lib/utils";

export const TRUCK_COLORS = [
  "#2196F3", // azul
  "#4CAF50", // verde
  "#FF9800", // laranja
  "#F44336", // vermelho
  "#9C27B0", // roxo
  "#FFEB3B", // amarelo
  "#00BCD4", // ciano
  "#E91E63", // rosa
  "#795548", // marrom
  "#607D8B", // azul acinzentado
  "#673AB7", // roxo escuro
  "#8BC34A", // verde limão
  "#FFC107", // âmbar
  "#03A9F4", // azul claro
  "#CDDC39", // verde claro
  "#FF5722", // laranja escuro
  "#009688", // verde petróleo
  "#3F51B5", // azul índigo
  "#A1887F", // bege acinzentado
  "#C2185B", // rosa escuro
  "#9E9E9E", // cinza
  "#B0BEC5", // cinza azulado claro
  "#FFA726", // laranja vibrante
  "#66BB6A", // verde médio
  "#BA68C8", // lavanda
  "#7986CB", // lilás acinzentado
  "#FF7043", // coral
  "#AED581", // verde pastel
  "#90CAF9", // azul pastel
  "#F48FB1", // rosa claro
];

/**
 * Hook para mapear ícones de frotas de veículos.
 * @param vehicles - Lista de veículos a serem mapeados.
 * @returns
 */
export const useFleetIcons = (vehicles: LocationVehicle[]) => {
  const [fleetIconMap, setFleetIconMap] = useState<
    Record<string, google.maps.Icon>
  >({});

  const availableColors = useMemo(() => TRUCK_COLORS, []);

  useEffect(() => {
    if (!vehicles?.length) return;

    const newFleetIconMap: Record<string, google.maps.Icon> = {
      ...fleetIconMap,
    };
    const uniqueFleets = [...new Set(vehicles.map((v) => v.fleet))];

    uniqueFleets.forEach((fleetId) => {
      if (!newFleetIconMap[fleetId]) {
        const index = parseInt(fleetId) % availableColors.length;
        const fallbackIndex =
          fleetId.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
          availableColors.length;
        const color = availableColors[isNaN(index) ? fallbackIndex : index];
        newFleetIconMap[fleetId] = createTruckIcon(color);
      }
    });

    setFleetIconMap(newFleetIconMap);
  }, [vehicles, availableColors]);

  const getVehicleIcon = useCallback(
    (fleet: string): google.maps.Icon => {
      return fleetIconMap[fleet] ?? createTruckIcon("#888");
    },
    [fleetIconMap]
  );

  return { fleetIconMap, getVehicleIcon };
};
