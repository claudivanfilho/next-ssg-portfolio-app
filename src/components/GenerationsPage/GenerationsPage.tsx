import React from "react";
import { GenerationResponse } from "@/models";
import { useTranslations } from "next-intl";
import GenerationListing from "./GenerationListing";

export default function GenerationsPage({
  generations,
  hideOnMobile,
}: {
  generations: GenerationResponse[];
  hideOnMobile: boolean;
}) {
  const t = useTranslations();

  return (
    <div className={`col-span-2 mt-4 lg:mt-0 ${hideOnMobile ? "hidden lg:block" : "block"}`}>
      <h3 className="mb-3 text-3xl font-bold text-gray-700">{t("generations")}</h3>
      <GenerationListing generations={generations} />
    </div>
  );
}
