"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "@material-ui/icons";

export default function BackButton() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  // TODO intl
  return (
    <button className="flex items-center text-xl font-bold lg:hidden" onClick={() => {}}>
      <ChevronLeft fontSize="large" />
      BACK
    </button>
  );
}
