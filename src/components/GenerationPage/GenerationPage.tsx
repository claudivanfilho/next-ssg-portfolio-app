import { GenerationResponse } from "@/models";

import GenerationDetails from "./GenerationDetails";
import PokemonListing from "./PokemonListing";

const GenerationPage = ({
  generation,
  hideOnMobile,
}: {
  generation: GenerationResponse;
  hideOnMobile: boolean;
}) => {
  return (
    <div className={`col-span-6 lg:pl-5 2xl:pl-10 ${hideOnMobile ? "hidden lg:block" : ""}`}>
      <GenerationDetails generation={generation} />
      <div className="mt-3">
        <PokemonListing pokemons={generation.pokemon_species} />
      </div>
    </div>
  );
};

export default GenerationPage;
