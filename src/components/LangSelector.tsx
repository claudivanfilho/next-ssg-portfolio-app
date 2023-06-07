"use client";

import React from "react";
import { LANGS } from "@/config/constants";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LangSelector(props: any) {
  const locale = useLocale();
  const router = useRouter();

  return (
    <select
      data-testid="lang-select"
      aria-label="Select a language"
      className="px-2 bg-transparent cursor-pointer"
      value={locale}
      onChange={(val) => {
        if (val.target.value === "en") {
          // router.push("/", {locale: });
        } else {
          router.replace(`/${val}`);
        }
      }}
    >
      {LANGS.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
