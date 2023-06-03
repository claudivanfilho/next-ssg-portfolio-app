"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";

const GenerationPageWrapper = ({ children }: { children: ReactNode }) => {
  const { pokemonName } = useParams();

  return (
    <div className={`col-span-6 lg:pl-5 2xl:pl-10 ${pokemonName ? "hidden lg:block" : ""}`}>
      {children}
    </div>
  );
};

export default GenerationPageWrapper;
