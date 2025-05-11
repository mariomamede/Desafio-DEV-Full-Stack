import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

/**
 * Container Component
 */
export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="p-6 max-w-7xl mx-auto">{children}</div>;
};
