import { API_URL, DEFAULT_LANG, GENERATION_API_URL } from "@/config/constants";
import { GenerationNotFound, PokemonNotFound } from "@/errors";

import {
  EvolutionChainResponse,
  GenerationResponse,
  Pokemon,
  PokemonResponse,
  PokemonSpecieResponse,
  Resource,
} from "../models";
import { normalizeGeneration, normalizePokemon } from "./dto.service";

export async function fetchGenerations(locale = DEFAULT_LANG): Promise<GenerationResponse[]> {
  return fetch(GENERATION_API_URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    })
    .then(async ({ results }: { results: Resource[] }) => {
      return Promise.all(
        results.map((generation) =>
          fetch(generation.url)
            .then((res) => res.json())
            .then((res) => normalizeGeneration(res, locale))
        )
      );
    });
}

export async function fetchGeneration(
  id: string,
  locale = DEFAULT_LANG
): Promise<GenerationResponse> {
  return fetch(`${API_URL}/generation/${id}`)
    .then((res) => {
      if (res.status === 404) {
        throw new GenerationNotFound();
      }
      return res.json();
    })
    .then((res) => normalizeGeneration(res, locale));
}

export async function fetchPokemon(name: string, locale = DEFAULT_LANG): Promise<Pokemon> {
  const pokemonRes: PokemonResponse = await fetch(`${API_URL}/pokemon/${name}`).then((res) => {
    if (res.status === 404) {
      throw new PokemonNotFound();
    }
    return res.json();
  });
  const pokemonSpecieRes: PokemonSpecieResponse = await fetch(pokemonRes.species.url).then((res) =>
    res.json()
  );
  const evolutions: PokemonResponse[] = await fetch(pokemonSpecieRes.evolution_chain.url)
    .then((res) => res.json())
    .then((res: EvolutionChainResponse) => {
      return Promise.all(
        res &&
          [
            res.chain.species,
            res.chain.evolves_to?.[0]?.species,
            res.chain.evolves_to?.[0]?.evolves_to?.[0]?.species,
          ]
            .filter((e) => e)
            .map((val) => fetch(`${API_URL}/pokemon/${val.name}`).then((res) => res.json()))
      );
    });

  return normalizePokemon(pokemonRes, pokemonSpecieRes, evolutions, locale);
}
