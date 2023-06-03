"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function GenerationsPageWrapper({ children }: { children: React.ReactNode }) {
  const { generationId } = useParams();

  return (
    <div className={`col-span-2 mt-4 lg:mt-0 ${generationId ? "hidden lg:block" : "block"}`}>
      {children}
    </div>
  );
}
