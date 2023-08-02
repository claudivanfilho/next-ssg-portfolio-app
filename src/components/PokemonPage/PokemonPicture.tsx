import Image from "next/image";

import { PokemonResponse } from "@/models";

export default function PokemonPicture({
  pokemon,
  className,
  size,
}: {
  pokemon: PokemonResponse;
  className: string;
  size: number;
}) {
  return (
    <Image
      alt={pokemon.name}
      className={`object-scale-down ${className}`}
      width={size}
      height={size}
      src={
        pokemon.sprites?.other.dream_world.front_default ||
        pokemon.sprites?.other["official-artwork"].front_default
      }
    />
  );
}
