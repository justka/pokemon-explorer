import { Text } from "../../UI/Text/Text";
import { Badge } from "../../UI/Badge/Badge";
import { Image } from "../Image/Image";

export function Tile({
  index,
  name,
  types,
}: {
  index: number;
  name: string;
  types: string[];
}) {
  const pokemonId = `#${`000${index + 1}`.slice(-3)}`;
  console.log(types);
  return (
    <div>
      <Image src="https://placehold.co/20" />
      <Text tag="span">{name}</Text>
      <Text tag="span">{pokemonId}</Text>
      <div>
        {types.map((oneType) => {
          console.log(oneType);
          return <Badge key={oneType}>{oneType}</Badge>;
        })}
      </div>
    </div>
  );
}
