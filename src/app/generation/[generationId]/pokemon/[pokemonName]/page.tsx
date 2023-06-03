import PokemonEvolutions from "@/components/PokemonPage/PokemonEvolutions";
import PokemonHeader from "@/components/PokemonPage/PokemonHeader";
import PokemonStats from "@/components/PokemonPage/PokemonStats";
import { fetchPokemon } from "@/services/api.service";
import React from "react";

export default async function page({ params }: { params: { pokemonName: string } }) {
  // TODO intl
  const pokemon = await fetchPokemon(params.pokemonName);
  return (
    <div
      className="flex flex-col col-span-4 lg:pl-5 2xl:pl-10"
      data-testid="pokemon-details-section"
    >
      <h2 className="mb-3 text-3xl font-bold text-gray-600 uppercase">{pokemon.name}</h2>
      <PokemonHeader pokemon={pokemon} />
      <div className="flex flex-col items-center mt-4">
        <h2 className="w-full mb-2 text-lg font-bold text-gray-600 uppercase">Evoluções</h2>
        <PokemonEvolutions pokemon={pokemon} />
      </div>
      <div className="flex flex-col items-center mt-4">
        <h2 className="w-full text-lg font-bold text-gray-600 uppercase">Stats</h2>
        <PokemonStats pokemon={pokemon} />
      </div>
    </div>
  );
}
