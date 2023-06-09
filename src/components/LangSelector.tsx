"use client";

import React from "react";
import { useLocale } from "next-intl";

import { useRouter } from "next/navigation";
import Link from "next-intl/link";

export default function LangSelector(props: any) {
  const locale = useLocale();
  const router = useRouter();

  return (
    <Link href={"/"} locale={locale === "en" ? "de" : "en"}>
      {locale === "en" ? "de" : "en"}
    </Link>
  );
}
