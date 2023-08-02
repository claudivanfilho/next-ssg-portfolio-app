import { Pokemon } from "@/models";

import ChevronRightIcon from "../ChevronRightIcon";
import PokemonEvolutionCard from "./PokemonEvolutionCard";

const PokemonEvolutions = ({ pokemon }: { pokemon?: Pokemon | null }) => {
  const evolutions = pokemon?.evolutions;

  return (
    <div
      className={`flex w-full lg:gap-3 justify-center items-center`}
      data-testid="pokemon-evolution-stages"
    >
      {evolutions?.[0] && <PokemonEvolutionCard stage={evolutions?.[0]} className="w-1/4" />}
      {evolutions?.[1] && <ChevronRightIcon />}
      {evolutions?.[1] && <PokemonEvolutionCard stage={evolutions?.[1]} className="w-1/4" />}
      {evolutions?.[2] && <ChevronRightIcon />}
      {evolutions?.[2] && <PokemonEvolutionCard stage={evolutions?.[2]} className="w-1/4" />}
    </div>
  );
};

export default PokemonEvolutions;
