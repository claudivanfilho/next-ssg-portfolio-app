"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { PokemonResponse } from "@/models/index";

import PokemonPicture from "./PokemonPicture";

const PokemonEvolutionCard = ({
  stage,
  className,
}: {
  className: string;
  stage: PokemonResponse;
}) => {
  const { generationId, pokemonName, locale } = useParams();
  const isSelected = pokemonName?.toLowerCase() === stage.name.toLowerCase();

  return (
    <Link
      locale={locale}
      href={`/generation/${generationId}/pokemon/${stage.name}`}
      className={`flex hover:scale-110 hover:bg-purple-200 hover:border-purple-400 rounded-sm shadow-xl transform border ${
        isSelected ? "border-purple-400 bg-purple-200 scale-110" : ""
      } ${className}`}
    >
      <div
        className={`flex w-full flex-col h-28 h-xl:h-32 items-center justify-between py-4 px-2 shadow cursor-pointer`}
      >
        {stage && <PokemonPicture pokemon={stage} className="w-10 max-h-16 h-xl:w-14" size={64} />}
        <span className="mt-2 text-xs text-gray-600 md:text-sm">{stage.name}</span>
      </div>
    </Link>
  );
};

export default PokemonEvolutionCard;
