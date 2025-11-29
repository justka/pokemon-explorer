import { Tile } from "../Tile/Tile";

export function PokemonsList({ pokemonsDetails }: { pokemonsDetails: any[] }) {
  return (
    <div className="grid gap-6 grid-cols-3">
      {pokemonsDetails.map((pokemon, index) => (
        <Tile key={pokemon.name} {...pokemon} index={index} />
      ))}
    </div>
  );
}
