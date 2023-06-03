"use client";

import { GenerationResponse } from "@/models";
import Link from "next/link";
import { useParams } from "next/navigation";

const Breadcrumbs = ({ generations }: { generations: GenerationResponse[] }) => {
  const { generationId, pokemonName } = useParams();
  const generation = generations.find((g) => String(g.id) === generationId);

  const renderTerm = (clickable: boolean, path: string, text: string = "") =>
    clickable ? (
      <Link href={path} className="flex w-full text-purple-700 lg:w-40 hover:underline">
        {text}
      </Link>
    ) : (
      text
    );

  // TODO fix generation and pokemon name intl
  return (
    <nav className="container block lg:hidden">
      <ol className="flex gap-2 py-4 pl-4 text-gray-700 list-reset bg-grey-light">
        <li>{renderTerm(true, "/", "Gerações")}</li>
        <li>/</li>
        <li>{renderTerm(!!pokemonName, `/generation/${generationId}`, generation?.name!)}</li>
        {pokemonName && <li>/</li>}
        {pokemonName && <li>{pokemonName}</li>}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
