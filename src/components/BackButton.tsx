"use client";

import { ChevronLeft } from "@material-ui/icons";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";

export default function BackButton() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();

  if (pathname === "/") return null;

  return (
    <button className="flex items-center text-xl font-bold lg:hidden" onClick={() => router.back()}>
      <ChevronLeft fontSize="large" />
      {t("back-btn")}
    </button>
  );
}
