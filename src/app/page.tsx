"use client";
import React, { Suspense } from "react";

import { LazyHeader } from "@/page/home/components";
import HomeContent from "@/page/home/HomeContent";
import LoadingFallback from "@/components/shared/LoadingFallback";
import { useVehicleData } from "@/hooks/useVehicleData";

/**
 * Home Page Component
 */
export default function Home() {
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
}
