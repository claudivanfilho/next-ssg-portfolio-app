import { Metadata } from "next";

import { fetchGeneration, fetchPokemon } from "./services/api.service";

export async function generateMetadataPokemonPage({
  params: { pokemonName },
}: {
  params: { pokemonName: string };
}): Promise<Metadata> {
  try {
    const pokemon = await fetchPokemon(pokemonName);

    return {
      title: `Pokesearch - ${pokemon.nameTranslated}`,
      description: pokemon.descriptionTranslated,
    };
  } catch (err) {
    return {
      title: `Pokesearch - ${pokemonName}`,
      description: `Pokemon Not Found`,
    };
  }
}

export async function generateMetadataGenerationPage({
  params: { generationId },
}: {
  params: { generationId: string };
}): Promise<Metadata> {
  try {
    const generation = await fetchGeneration(generationId);

    return {
      title: `Pokesearch - ${generation.nameTranslated}`,
      description: `Here you can find all the pokemons from ${generation.main_region.name} region`,
    };
  } catch (err) {
    return {
      title: `Pokesearch - ${generationId}`,
      description: "Generation Not Found",
    };
  }
}
