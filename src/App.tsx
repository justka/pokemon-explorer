import "./App.css";
import { PageTitle } from "./components/PageTitle/PageTitle";
import { PokemonsList } from "./components/PokemonsList/PokemonsList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TypesList } from "./components/TypesList/TypesList";
import { Button } from "./UI/Button/Button";

export function App() {
  return (
    <>
      <PageTitle title="Pokemon Explorer" />
      <SearchBar />
      <TypesList />
      <PokemonsList />
      <Button>Load More</Button>
    </>
  );
}
