import React, { MouseEventHandler } from "react";
import {
  Dialog as DialogUi,
  Description,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { cn } from "@/lib/utils";

interface DialogProps<T = HTMLButtonElement> {
  open: boolean;
  onClose?: MouseEventHandler<T> | undefined;
  className?: string;
}

/**
 * Componente de diálogo estilizado
 * @param {DialogProps} props - Propriedades do componente Dialog
 * @returns {JSX.Element} Componente Dialog estilizado
 */
export default function Dialog({ open, onClose, className = "" }: DialogProps) {
  const handleClose = (value: boolean) => {
    if (onClose) {
      onClose(value as unknown as React.MouseEvent<HTMLButtonElement>);
    }
  };

  return (
    <DialogUi
      open={open}
      onClose={handleClose}
      className={cn("relative z-50", className)}
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border p-12">
          <DialogTitle className="font-bold">Deactivate account</DialogTitle>
          <Description>
            This will permanently deactivate your account
          </Description>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed.
          </p>
          <div className="flex gap-4">
            <button onClick={onClose}>Cancel</button>
            <button onClick={onClose}>Deactivate</button>
          </div>
        </DialogPanel>
      </div>
    </DialogUi>
  );
}
