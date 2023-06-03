import PokemonEvolutionCardLoader from "./PokemonEvolutionCardLoader";

const EvolutionEvolutionsLoader = () => (
  <div className="flex items-center justify-center w-full gap-4">
    <PokemonEvolutionCardLoader />
    {">"}
    <PokemonEvolutionCardLoader />
    {">"}
    <PokemonEvolutionCardLoader />
  </div>
);

export default EvolutionEvolutionsLoader;
