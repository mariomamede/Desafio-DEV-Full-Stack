import { useState, Fragment, ChangeEvent, FormEvent } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Button from "../ui/Button";
import { applyLicensePlateMask } from "@/lib/utils";

interface VehicleFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface VehicleFormData {
  plate: string;
  fleet: string | null;
  type: string;
  model: string;
  nameOwner: string;
  status: string;
}

export default function VehicleFormDialog({
  isOpen,
  onClose,
}: VehicleFormDialogProps) {
  const [formData, setFormData] = useState<VehicleFormData>({
    plate: "",
    fleet: "",
    type: "",
    model: "",
    nameOwner: "",
    status: "active",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "plate") {
      const formattedValue = applyLicensePlateMask(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "Função de envio do formulário não implementada. Para implementá-la, você precisa me contratar! 😄"
    );
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-lg bg-[var(--background)] border border-[var(--border-color)] p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-[var(--text-color)] mb-6 border-b border-[var(--border-color)] pb-3"
                >
                  Cadastro de Veículo
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="plate"
                        className="block text-sm font-medium text-[var(--text-color)] mb-1"
                      >
                        Placa *
                      </label>
                      <input
                        type="text"
                        name="plate"
                        id="plate"
                        value={formData.plate}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md bg-[var(--secondary)] border border-[var(--border-color)] focus:border-[var(--primary)] focus:ring focus:ring-[var(--primary)] focus:ring-opacity-50 px-3 py-2 text-[var(--text-color)]"
                        placeholder="AAA-0000"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="fleet"
                        className="block text-sm font-medium text-[var(--text-color)] mb-1"
                      >
                        Frota
                      </label>
                      <input
                        type="text"
                        name="fleet"
                        id="fleet"
                        value={formData.fleet || ""}
                        onChange={handleChange}
                        className="w-full rounded-md bg-[var(--secondary)] border border-[var(--border-color)] focus:border-[var(--primary)] focus:ring focus:ring-[var(--primary)] focus:ring-opacity-50 px-3 py-2 text-[var(--text-color)]"
                        placeholder="Código da frota"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-[var(--text-color)] mb-1"
                      >
                        Tipo *
                      </label>
                      <select
                        name="type"
                        id="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md bg-[var(--secondary)] border border-[var(--border-color)] focus:border-[var(--primary)] focus:ring focus:ring-[var(--primary)] focus:ring-opacity-50 px-3 py-2 text-[var(--text-color)]"
                      >
                        <option value="" disabled>
                          Selecione um tipo
                        </option>
                        <option value="car">Carro</option>
                        <option value="motorcycle">Moto</option>
                        <option value="truck">Caminhão</option>
                        <option value="van">Van</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="model"
                        className="block text-sm font-medium text-[var(--text-color)] mb-1"
                      >
                        Modelo *
                      </label>
                      <input
                        type="text"
                        name="model"
                        id="model"
                        value={formData.model}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md bg-[var(--secondary)] border border-[var(--border-color)] focus:border-[var(--primary)] focus:ring focus:ring-[var(--primary)] focus:ring-opacity-50 px-3 py-2 text-[var(--text-color)]"
                        placeholder="Modelo do veículo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="nameOwner"
                        className="block text-sm font-medium text-[var(--text-color)] mb-1"
                      >
                        Proprietário *
                      </label>
                      <input
                        type="text"
                        name="nameOwner"
                        id="nameOwner"
                        value={formData.nameOwner}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md bg-[var(--secondary)] border border-[var(--border-color)] focus:border-[var(--primary)] focus:ring focus:ring-[var(--primary)] focus:ring-opacity-50 px-3 py-2 text-[var(--text-color)]"
                        placeholder="Nome do proprietário"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="status"
                        className="block text-sm font-medium text-[var(--text-color)] mb-1"
                      >
                        Status *
                      </label>
                      <select
                        name="status"
                        id="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md bg-[var(--secondary)] border border-[var(--border-color)] focus:border-[var(--primary)] focus:ring focus:ring-[var(--primary)] focus:ring-opacity-50 px-3 py-2 text-[var(--text-color)]"
                      >
                        <option value="active">Ativo</option>
                        <option value="inactive">Inativo</option>
                        <option value="maintenance">Em manutenção</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <Button type="submit" style="secondary" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button type="submit" style="primary">
                      Salvar
                    </Button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
