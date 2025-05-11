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

const Dialog: React.FC<DialogProps> = ({ open, onClose, className = "" }) => {
  const handleClose = (value: boolean) => {
    if (onClose) {
      onClose(new MouseEvent("click") as any); // Simulate a MouseEvent if needed
    }
  };

  return (
    <DialogUi
      open={open}
      onClose={(value) => handleClose(value)}
      className="relative z-50"
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
};

export default Dialog;
