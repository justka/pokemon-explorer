import { Tile } from "../Tile/Tile";

export function PokemonsList({ pokemonsDetails }: { pokemonsDetails: any[] }) {
  return pokemonsDetails.map((pokemon, index) => (
    <Tile key={pokemon.name} {...pokemon} index={index} />
  ));
}
