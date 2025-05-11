import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "small" | "medium" | "large";
  shadow?: "none" | "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  border?: boolean;
  hasCloseButton?: boolean;
  onClose?: () => void;
  showArrow?: boolean;
  arrowPosition?: "top" | "bottom" | "left" | "right";
  maxHeight?: string;
}

/**
 * Um componente de modal simples que pode ser usado para exibir conteúdo em um formato de sobreposição.
 * @param {React.ReactNode} children - O conteúdo a ser exibido dentro do modal.
 * @param {string} className - Classes adicionais para estilização.
 * @param {string} padding - O preenchimento do modal, pode ser "none", "small", "medium" ou "large".
 * @param {string} shadow - O nível de sombra do modal, pode ser "none", "sm", "md" ou "lg".
 * @param {string} rounded - O nível de borda arredondada do modal, pode ser "none", "sm", "md", "lg" ou "full".
 * @param {boolean} border - Se deve ter uma borda ou não.
 * @param {boolean} hasCloseButton - Se deve exibir o botão de fechar ou não.
 * @param {function} onClose - Função a ser chamada quando o botão de fechar for clicado.
 * @param {boolean} showArrow - Se deve exibir uma seta ou não.
 * @param {string} arrowPosition - A posição da seta, pode ser "top", "bottom", "left" ou "right".
 * @param {string} maxHeight - A altura máxima do modal.
 */
export default function Modal({
  children,
  className = "",
  padding = "medium",
  shadow = "none",
  rounded = "md",
  border = false,
  hasCloseButton = false,
  onClose,
  showArrow = false,
  arrowPosition = "bottom",
  maxHeight,
}: ModalProps) {
  const paddingMap = {
    none: "p-0",
    small: "p-2",
    medium: "p-4",
    large: "p-6",
  };

  const shadowMap = {
    none: "",
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
  };

  const roundedMap = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const arrowSpace = 8;

  return (
    <div
      className="relative"
      style={{
        margin:
          arrowPosition === "top"
            ? `${arrowSpace}px 0 0 0`
            : arrowPosition === "bottom"
            ? `0 0 ${arrowSpace}px 0`
            : arrowPosition === "left"
            ? `0 0 0 ${arrowSpace}px`
            : arrowPosition === "right"
            ? `0 ${arrowSpace}px 0 0`
            : "0",
      }}
    >
      {/* Container */}
      <div
        className={cn(
          paddingMap[padding],
          shadowMap[shadow],
          roundedMap[rounded],
          border ? "border border-[var(--border-color)]" : "",
          "bg-[var(--secondary)]",
          hasCloseButton ? "pr-10" : "",
          className
        )}
        style={{
          maxHeight: maxHeight,
          overflow: maxHeight ? "auto" : "visible",
        }}
      >
        {children}

        {/* Close */}
        {hasCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-[var(--primary)] hover:text-white duration-200"
            aria-label="Fechar"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Arrow */}
      {showArrow && (
        <div
          className={cn(
            "absolute w-4 h-4 bg-[var(--secondary)] rotate-45 transform z-10",
            border ? "border border-[var(--border-color)]" : "",
            {
              "left-1/2 -translate-x-1/2 bottom-0 -mb-2 border-t-0 border-l-0":
                arrowPosition === "bottom",
              "left-1/2 -translate-x-1/2 top-0 -mt-2 border-b-0 border-r-0":
                arrowPosition === "top",
              "top-1/2 -translate-y-1/2 left-0 -ml-2 border-t-0 border-r-0":
                arrowPosition === "left",
              "top-1/2 -translate-y-1/2 right-0 -mr-2 border-b-0 border-l-0":
                arrowPosition === "right",
            }
          )}
        />
      )}
    </div>
  );
}
