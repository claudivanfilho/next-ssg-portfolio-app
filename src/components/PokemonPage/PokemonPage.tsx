import React from "react";

import { Pokemon } from "@/models";

import Translate from "../Translate";
import PokemonEvolutions from "./PokemonEvolutions";
import PokemonHeader from "./PokemonHeader";
import PokemonStats from "./PokemonStats";

export default function PokemonPage({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div
      className="flex flex-col col-span-4 lg:pl-5 2xl:pl-10"
      data-testid="pokemon-details-section"
    >
      <h2 className="mb-3 text-3xl font-bold text-gray-600 uppercase">{pokemon.name}</h2>
      <PokemonHeader pokemon={pokemon} />
      <div className="flex flex-col items-center mt-4">
        <h2 className="w-full mb-2 text-lg font-bold text-gray-600 uppercase">
          <Translate value="evolution-map" />
        </h2>
        <PokemonEvolutions pokemon={pokemon} />
      </div>
      <div className="flex flex-col items-center mt-4">
        <h2 className="w-full text-lg font-bold text-gray-600 uppercase">
          <Translate value="stats" />
        </h2>
        <PokemonStats pokemon={pokemon} />
      </div>
    </div>
  );
}
