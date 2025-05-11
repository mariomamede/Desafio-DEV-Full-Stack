import React, { useState, useRef, useCallback } from "react";
import { useVehicle } from "@/hooks/useVehicle";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper,
  SortingState,
} from "@tanstack/react-table";
import { ChevronUp, ChevronDown, Loader2 } from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import { Select } from "@headlessui/react";

const columnHelper = createColumnHelper<Vehicle>();

const columns = [
  columnHelper.accessor("plate", {
    header: "Placa",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("fleet", {
    header: "Frota",
    cell: (info) => info.getValue() || "-",
  }),
  columnHelper.accessor("type", {
    header: "Tipo",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("model", {
    header: "Modelo",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("nameOwner", {
    header: "Proprietário",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          info.getValue() === "active"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {info.getValue() === "active" ? "Ativo" : "Inativo"}
      </span>
    ),
  }),
  columnHelper.accessor("createdAt", {
    header: "Data de Criação",
    cell: (info) => new Date(info.getValue()).toLocaleDateString("pt-BR"),
  }),
];

/**
 * VehicleDataTable component
 * @returns Returna o componente VehicleDataTable
 */
export default function VehicleDataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  const {
    vehiclesList,
    isLoading,
    error,
    currentPage,
    totalPages,
    changePage,
    loadVehicles,
  } = useVehicle();

  const loadMoreVehicles = useCallback(() => {
    if (currentPage < totalPages && !isLoading) {
      changePage(currentPage + 1);
    }
  }, [currentPage, totalPages, isLoading, changePage]);

  const lastVehicleRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          if (entries[0].isIntersecting && currentPage < totalPages) {
            loadMoreVehicles();
          }
        }
      );

      if (node) observer.current.observe(node);
    },
    [isLoading, currentPage, totalPages, loadMoreVehicles]
  );

  const table = useReactTable({
    data: vehiclesList,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const perPage = parseInt(value, 10);
    loadVehicles(1, "tracked", perPage);
  };

  if (error) {
    console.error("Error loading vehicles:", error);
    return (
      <div className="flex justify-center items-center p-8 bg-red-50 rounded-lg text-red-600">
        Erro ao carregar lista de veículos. Tente novamente mais tarde.
      </div>
    );
  }

  return (
    <div className="bg-[var(--secondary)] border border-[var(--border-color)] shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b border-[var(--border-color)] flex justify-between items-center">
        <h2 className="text-lg font-semibold">Veículos</h2>
        <div className="flex space-x-2 items-center">
          <span className="text-sm font-medium text-gray-700">
            Quantidade por página:
          </span>
          <Select
            name="status"
            aria-label="Quantidade por página"
            className="p-2 border border-[var(--border-color)] rounded-md focus:ring-blue-500 focus:border-blue-500 text-md text-gray-500"
            onChange={handleSelectChange}
          >
            <option value="10" className="p-2">
              10
            </option>
            <option value="20" className="p-2">
              20
            </option>
            <option value="30" className="p-2">
              30
            </option>
            <option value="40" className="p-2">
              40
            </option>
          </Select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[var(--secondary)] border-b border-[var(--border-color)]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center space-x-1">
                      <span>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </span>
                      <span>
                        {{
                          asc: <ChevronUp className="w-4 h-4" />,
                          desc: <ChevronDown className="w-4 h-4" />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-[var(--secondary)] divide-y divide-[var(--border-color)]">
            {table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                ref={
                  i === table.getRowModel().rows.length - 1
                    ? lastVehicleRef
                    : null
                }
                className="hover:bg-[var(--border-color)]"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center p-4 border-t border-[var(--border-color)]">
          <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
          <span className="ml-2 text-sm">Carregando...</span>
        </div>
      )}

      {!isLoading && vehiclesList.length === 0 && (
        <div className="flex justify-center items-center p-8">
          Nenhum veículo encontrado.
        </div>
      )}
    </div>
  );
}
