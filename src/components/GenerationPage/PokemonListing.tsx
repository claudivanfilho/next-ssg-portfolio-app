"use client";

import { useState } from "react";
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { Resource } from "@/models/index";
import PokemonListingItem from "./PokemonListingItem";
import { useTranslations } from "next-intl";

const PokemonListing = ({ pokemons }: { pokemons: Resource[] }) => {
  const [searchText, setSearchText] = useState("");
  const filteredPokemons = pokemons.filter((p) => p.name.includes(searchText));
  const t = useTranslations();

  return (
    <div className="flex flex-col" data-testid="pokemon-listing">
      <div className="flex items-center justify-between w-full pr-2 mt-2 mb-3">
        <TextField
          onChange={(event) => setSearchText(event.target.value)}
          id="search-input"
          label={t("search-placeholder")}
          className="w-full"
        />
        <Search className="w-6 mt-4 mr-2" />
      </div>
      <div
        style={{ height: "calc(100vh - 350px)" }}
        className="flex flex-col gap-4 pb-4 overflow-y-auto lg:grid lg:grid-cols-3 auto-rows-min"
      >
        {filteredPokemons.map((pokemon) => (
          <PokemonListingItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonListing;
