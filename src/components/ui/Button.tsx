import React, { MouseEventHandler } from "react";
import { Button as ButtonUi } from "@headlessui/react";
import { cn } from "@/lib/utils";

interface ButtonProps<T = HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  style?: "primary" | "secondary" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler<T> | undefined;
  className?: string;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  disabled = false,
  style = "primary",
  onClick,
  className = "",
  id,
}) => {
  const buttonStyles = {
    primary: "bg-[var(--primary)] text-[var(--white)]",
    secondary: "border-[var(--border-color)] bg-[var(--secondary)]",
  };

  return (
    <ButtonUi
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-opacity-50",
        buttonStyles[style],
        className,
        !disabled && "cursor-pointer", // Adiciona o cursor pointer se não estiver desabilitado
        disabled && "cursor-not-allowed" // Adiciona o cursor not-allowed se estiver desabilitado
      )}
      id={id}
    >
      {children}
    </ButtonUi>
  );
};

export default Button;
