"use client";
import React, { useState } from "react";
import Radio from "../ui/Radio";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setIsSerching, setIsTracking } from "@/store/features/interfaceSlice";
import {
  setLocationVehicles,
  setVehicles,
} from "@/store/features/vehicleSlice";
import { applyLicensePlateMask } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useFormDialog } from "@/hooks/useFormDialog";

const listOptions = ["Rastreados", "Outros"];

/**
 * Componente de Filtro
 * @returns {JSX.Element} Componente de Filtro
 */
export default function Filter() {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState(listOptions[0]);
  const [searchValue, setSearchValue] = useState("");
  const vehicleState = useSelector((state: RootState) => state.vehicle);
  const { openDialog } = useFormDialog();

  const handleChange = (value: string) => {
    setSelected(value);
    dispatch(setIsTracking(value === listOptions[0]));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const formattedValue = applyLicensePlateMask(value);
    setSearchValue(formattedValue);

    const searchLower = formattedValue.toLowerCase();
    const filteredLocation = vehicleState.locationVehicles.filter((vehicle) => {
      return (
        vehicle.plate?.toLowerCase().includes(searchLower) ||
        vehicle.fleet?.toLowerCase().includes(searchLower)
      );
    });
    const filteredVehicles = vehicleState.vehicles.filter((vehicle) => {
      return (
        vehicle.plate?.toLowerCase().includes(searchLower) ||
        vehicle.fleet?.toLowerCase().includes(searchLower)
      );
    });

    dispatch(setIsSerching(!!value));
    dispatch(setVehicles(filteredVehicles));
    dispatch(setLocationVehicles(filteredLocation));
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-3 md:p-5 space-y-4 md:space-y-0">
      <Radio
        label="Lista"
        value={selected}
        options={listOptions}
        onChange={handleChange}
        className="mt-2"
        id="filter-list"
      />
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
        <Input
          name="full_name"
          type="text"
          placeholder="Buscar por placa ou frota"
          className="w-full sm:w-70"
          value={searchValue}
          onChange={handleSearch}
          onInput={handleSearch}
        />
        <Button
          className="bg-[var(--primary)] px-10 w-full sm:w-auto flex items-center justify-center space-x-2"
          id="add-button"
          onClick={openDialog}
        >
          <span>Novo</span>
          <Plus size={18} />
        </Button>
      </div>
    </div>
  );
}
