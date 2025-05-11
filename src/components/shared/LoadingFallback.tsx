import { Loader2 } from "lucide-react";
import React from "react";

/**
 * LoadingFallback Component
 */
const LoadingFallback: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
      <p className="mt-2 text-gray-600">Carregando...</p>
    </div>
  );
};

export default LoadingFallback;
