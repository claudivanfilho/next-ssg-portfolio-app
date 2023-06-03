"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function GenerationListingItem({ id, name }: { id: number; name: string }) {
  const params = useParams();
  return (
    <Link
      key={`item-${id}`}
      href={`/generation/${id}`}
      className={`p-8 lg:py-6 mb-3 shadow-md rounded-sm text-center font-bold uppercase text-xs transform hover:scale-105 ${
        `${id}` === params.generationId
          ? "bg-purple-600 text-white"
          : "hover:bg-purple-200 hover:text-purple-600"
      }`}
    >
      {name}
    </Link>
  );
}
