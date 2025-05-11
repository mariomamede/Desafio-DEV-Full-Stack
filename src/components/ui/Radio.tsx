import React from "react";
import { Field, Label, RadioGroup, Radio as RadioUi } from "@headlessui/react";

interface RadioProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  className?: string;
  id?: string;
  orientation?: "horizontal" | "vertical";
}

/**
 * Componente Radio que permite selecionar uma opção de uma lista
 */
const Radio: React.FC<RadioProps> = ({
  label,
  value,
  options,
  onChange,
  className = "",
  id,
  orientation = "horizontal",
}) => {
  return (
    <div className={`radio-group flex ${className}`} id={id}>
      {label && <div className="font-medium">{label}</div>}

      <RadioGroup
        value={value}
        onChange={onChange}
        className={`${
          orientation === "vertical"
            ? "space-y-2"
            : "flex flex-wrap gap-x-4 gap-y-2 space-x-8 ml-8"
        }`}
        aria-label={label}
      >
        {options.map((option) => (
          <Field key={option} className="flex items-center gap-2">
            <RadioUi
              value={option}
              className="flex size-5 items-center justify-center rounded-full transition-colors duration-200 ease-in-out border-2 border-[var(--primary)]"
            >
              {({ checked }) => (
                <span
                  className={`
                    size-3 rounded-full bg-[var(--primary)] transition-opacity
                    ${checked ? "opacity-100" : "opacity-0"}
                  `}
                />
              )}
            </RadioUi>
            <Label className="text-sm">{option}</Label>
          </Field>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Radio;
