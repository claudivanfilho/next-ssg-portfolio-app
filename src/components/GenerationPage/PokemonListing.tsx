"use client";

import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Resource } from "@/models/index";

import PokemonListingItem from "./PokemonListingItem";

const SCROLL_STORAGE_KEY_PREFIX = "pokemon-listing-scroll-generation-";

const PokemonListing = ({ pokemons }: { pokemons: Resource[] }) => {
  const params = useParams();
  const [searchText, setSearchText] = useState("");
  const filteredPokemons = pokemons.filter((p) => p.name.includes(searchText));
  const t = useTranslations();

  useEffect(() => {
    const storageKey = `${SCROLL_STORAGE_KEY_PREFIX}${params.generationId}`;

    const scrollPosotion = window.localStorage.getItem(storageKey) || "0";
    document.getElementById("pokemon-listing-scroll")!.scrollTop = +scrollPosotion;

    const handle = (e: any) => {
      window.localStorage.setItem(storageKey, e.target.scrollTop);
    };

    document.getElementById("pokemon-listing-scroll")?.addEventListener("scroll", handle);

    return () =>
      document.getElementById("pokemon-listing-scroll")?.removeEventListener("scroll", handle);
  }, []);

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
        id="pokemon-listing-scroll"
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
