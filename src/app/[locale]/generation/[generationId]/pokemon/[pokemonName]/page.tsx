import App from "@/components/App";
import ErrorPage from "@/components/ErrorPage";
import { fetchGeneration, fetchGenerations, fetchPokemon } from "@/services/api.service";

export default async function page({
  params: { generationId, pokemonName, locale },
}: {
  params: {
    generationId: string;
    pokemonName: string;
    locale: string;
  };
}) {
  try {
    const generations = await fetchGenerations(locale);
    const generation = await fetchGeneration(generationId);
    const pokemon = await fetchPokemon(pokemonName, locale);

    return <App generations={generations} generation={generation} pokemon={pokemon} />;
  } catch (error) {
    return <ErrorPage message={(error as Error).message} />;
  }
}
