import App from "@/components/App";
import { fetchGenerations, fetchPokemon } from "@/services/api.service";
import React from "react";

export default async function page({
  params: { generationId, pokemonName, locale },
}: {
  params: {
    generationId: string;
    pokemonName: string;
    locale: string;
  };
}) {
  const generations = await fetchGenerations(locale);
  const generation = generations.find((gen) => gen.id === +generationId);
  const pokemon = await fetchPokemon(pokemonName, locale);

  return <App generations={generations} generation={generation} pokemon={pokemon} />;
}
