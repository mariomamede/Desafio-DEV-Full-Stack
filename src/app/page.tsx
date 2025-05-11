"use client";
import React, { Suspense } from "react";

import { LazyHeader } from "@/pages/home/components";
import HomeContent from "@/pages/home/HomeContent";
import LoadingFallback from "@/components/shared/LoadingFallback";
import { useVehicleData } from "@/hooks/useVehicleData";

/**
 * Home Page Component
 */
const Home: React.FC = () => {
  const { isLoading } = useVehicleData();

  return (
    <div className="flex flex-col w-full h-full">
      <Suspense fallback={<LoadingFallback />}>
        <LazyHeader />
      </Suspense>
      <div className="flex-1 overflow-hidden">
        {isLoading ? <LoadingFallback /> : <HomeContent />}
      </div>
    </div>
  );
};

export default Home;
