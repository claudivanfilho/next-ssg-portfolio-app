"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "@material-ui/icons";
import { useTranslations } from "next-intl";

export default function BackButton() {
  const pathname = usePathname();
  const t = useTranslations();

  if (pathname === "/") return null;

  return (
    <button className="flex items-center text-xl font-bold lg:hidden" onClick={() => {}}>
      <ChevronLeft fontSize="large" />
      {t("back-btn")}
    </button>
  );
}
