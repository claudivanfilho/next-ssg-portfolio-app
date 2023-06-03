"use client";

// import { ErrorRounded } from "@material-ui/icons";

import { PokemonResponse } from "@/models/index";
import PokemonPicture from "./PokemonPicture";
import { useParams } from "next/navigation";
import Link from "next/link";

const PokemonEvolutionCard = ({
  stage,
  className,
}: {
  className: string;
  stage: PokemonResponse;
}) => {
  const { generationId, pokemonName } = useParams();
  const isSelected = pokemonName?.toLowerCase() === stage.name.toLowerCase();

  return (
    <Link
      href={`/generation/${generationId}/pokemon/${stage.name}`}
      className={`flex hover:scale-110 hover:bg-purple-200 hover:border-purple-400 rounded-sm shadow-xl transform border ${
        isSelected ? "border-purple-400 bg-purple-200 scale-110" : ""
      } ${className}`}
    >
      <div
        className={`flex w-full flex-col h-28 h-xl:h-32 items-center justify-between py-4 px-2 shadow cursor-pointer`}
      >
        {stage && <PokemonPicture pokemon={stage} className="w-10 max-h-16 h-xl:w-14" size={64} />}
        {/* {error && (
          <div className="flex flex-col items-center justify-center w-full h-8 gap-3 text-xs text-gray-500 rounded lg:h-14">
            <ErrorRounded className="text-red-600" fontSize="large" />
            Not Found
          </div>
        )} */}
        <span className="mt-2 text-xs text-gray-600 md:text-sm">{stage.name}</span>
      </div>
    </Link>
  );
};

export default PokemonEvolutionCard;
