import React from "react";
import GenerationDetails from "@/components/GenerationPage/GenerationDetails";
import PokemonListing from "@/components/GenerationPage/PokemonListing";
import { fetchGeneration } from "@/services/api.service";
import GenerationPageWrapper from "@/components/GenerationPage/GenerationPageWrapper";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { generationId: string };
}) {
  const generation = await fetchGeneration(params.generationId);

  return (
    <>
      <GenerationPageWrapper>
        <GenerationDetails generation={generation} />
        <div className="mt-3">
          <PokemonListing pokemons={generation.pokemon_species} />
        </div>
      </GenerationPageWrapper>
      {children}
    </>
  );
}
