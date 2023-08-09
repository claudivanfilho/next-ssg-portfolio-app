import { Metadata } from "next";

import App from "@/components/App";
import ErrorPage from "@/components/ErrorPage";
import { fetchGeneration, fetchGenerations } from "@/services/api.service";

export async function generateMetadata({
  params: { generationId },
}: {
  params: { generationId: string };
}): Promise<Metadata> {
  const generation = await fetchGeneration(generationId);

  return {
    title: `Pokesearch - ${generation.nameTranslated}`,
    description: `Here you can find all the pokemons from ${generation.main_region.name} region`,
  };
}

export default async function page({
  params: { generationId, locale },
}: {
  params: {
    generationId: string;
    locale: string;
  };
}) {
  try {
    const generations = await fetchGenerations(locale);
    const generation = await fetchGeneration(generationId);

    return <App generations={generations} generation={generation} />;
  } catch (error) {
    return <ErrorPage message={(error as Error).message} />;
  }
}
