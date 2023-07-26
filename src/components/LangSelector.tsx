"use client";

import React from "react";
import { useLocale } from "next-intl";

import { LANGS } from "@/config/constants";
import { usePathname, useRouter } from "next/navigation";

export default function LangSelector(props: any) {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  return (
    <select
      data-testid="lang-select"
      className="px-2 bg-transparent"
      value={locale}
      onChange={(val) => {
        if (pathName.match(/\/([a-zA-Z]{2})\/?$/)) {
          router.push(`/${val.target.value}/${pathName.substring(4)}/`);
        } else {
          router.push(`/${val.target.value}${pathName}`);
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
