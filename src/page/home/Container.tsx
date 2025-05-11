import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

/**
 * Componente Container para envolver os filhos com largura máxima e padding
 * @param {ReactNode} children - Os elementos filhos a serem envolvidos
 * @returns {JSX.Element} - Os filhos envolvidos
 */
export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="p-6 max-w-7xl mx-auto">{children}</div>;
};
