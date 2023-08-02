"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

import { LANGS } from "@/config/constants";

export default function LangSelector(props: any) {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <select
      data-testid="lang-select"
      className="px-2 bg-transparent"
      value={props.locale}
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
