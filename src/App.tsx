import { useEffect, useState } from "react";
import "./App.css";
import { PageTitle } from "./components/PageTitle/PageTitle";
import { PokemonsList } from "./components/PokemonsList/PokemonsList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TypesList } from "./components/TypesList/TypesList";
import { Button } from "./UI/Button/Button";

export function App() {
  const [pokemonsDetails, setPokemonsDetails] = useState<any[]>([]);
  useEffect(() => {
    async function fetchPokemonsList() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
      );
      const data = await response.json();

      const details = await Promise.all(
        data.results.map(async (pokemon: any) => {
          const res2 = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const data2 = await res2.json();

          return {
            id: data2.id,
            name: data2.name,
            image: data2.sprites.front_default,
            types: data2.types.map((t: any) => t.type.name),
          };
        })
      );
      console.log(details);
      setPokemonsDetails(details);
    }

    fetchPokemonsList();
  }, []);

  return (
    <>
      <PageTitle title="Pokemon Explorer" />
      <SearchBar />
      <TypesList />
      <PokemonsList pokemonsDetails={pokemonsDetails} />
      <Button>Load More</Button>
    </>
  );
}
