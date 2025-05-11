import React, { FormEventHandler } from "react";
import { Input as InputUi } from "@headlessui/react";
import { cn } from "@/lib/utils";

interface InputProps<T> {
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: FormEventHandler<T> | undefined;
  onInput?: FormEventHandler<T> | undefined;
  className?: string;
  id?: string;
}

export const Input: React.FC<InputProps<HTMLInputElement>> = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  onInput,
  className = "",
  id,
}) => {
  return (
    <InputUi
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onInput={onInput}
      placeholder={placeholder}
      className={cn(
        "border-1 border-[var(--border-color)] rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition-colors duration-200 ease-in-out",
        className
      )}
      id={id}
    />
  );
};
