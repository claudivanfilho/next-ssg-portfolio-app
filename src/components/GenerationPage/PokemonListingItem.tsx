import { Resource } from "@/models/index";
import Link from "next/link";
import { useParams } from "next/navigation";

const PokemonListingItem = ({ pokemon }: { pokemon: Resource }) => {
  const { generationId, pokemonName } = useParams();
  const isSelected = pokemon.name === pokemonName;

  return (
    <Link
      href={`/generation/${generationId}/pokemon/${pokemon.name}`}
      className={`grid place-content-center py-4 lg:w-32 xl:w-40 shadow-md font-bold text-xs uppercase transform md:hover:scale-105 ${
        isSelected
          ? "bg-purple-600 text-white"
          : "text-purple-600 hover:bg-purple-200 hover:text-purple-600"
      }`}
    >
      {pokemon.name}
    </Link>
  );
};

export default PokemonListingItem;
