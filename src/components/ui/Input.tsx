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

/**
 * Um componente de input
 * @param {string} name - Nome do campo de entrada.
 * @param {string} type - Tipo de entrada (por exemplo, "text", "email", etc.).
 * @param {string} value - Valor atual do campo de entrada.
 * @param {string} placeholder - Texto de espaço reservado exibido quando o campo está vazio.
 * @param {function} onChange - Função chamada quando o valor do campo muda.
 * @param {function} onInput - Função chamada quando o usuário digita no campo.
 * @param {string} className - Classes adicionais para estilização.
 * @param {string} id - ID do campo de entrada.
 */
export default function Input({
  name,
  type,
  value,
  placeholder,
  onChange,
  onInput,
  className = "",
  id,
}: InputProps<HTMLInputElement>) {
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
}
