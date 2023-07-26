import React from "react";
import GenerationsPage from "./GenerationsPage/GenerationsPage";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import GenerationPage from "./GenerationPage/GenerationPage";
import PokemonPage from "./PokemonPage/PokemonPage";
import { GenerationResponse, Pokemon } from "@/models";

export default function App({
  generations,
  generation,
  pokemon,
}: {
  generations: GenerationResponse[];
  generation?: GenerationResponse;
  pokemon?: Pokemon;
}) {
  return (
    <>
      <Header />
      {generation && <Breadcrumbs generation={generation} pokemon={pokemon} />}
      <main className="overflow-y-auto" style={{ height: "calc(100vh - 135px)" }}>
        <div className="grid-cols-12 px-5 m-auto max-w-screen-2xl lg:grid lg:mt-8 lg:divide-x-2 lg:divide-solid lg:gap-x-5 2xl:gap-x-10 2xl:px-0">
          <GenerationsPage generations={generations} hideOnMobile={!!generation} />
          {generation && <GenerationPage generation={generation} hideOnMobile={!!pokemon} />}
          {pokemon && <PokemonPage pokemon={pokemon} />}
        </div>
      </main>
      <Footer />
    </>
  );
}
