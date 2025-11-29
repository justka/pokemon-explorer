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
    <div className="flex flex-col items-center gap-3 p-4! rounded-2xl bg-red-400">
      <Image src="https://placehold.co/20" />
      <Text className="text-white text-2xl! capitalize" tag="span">
        {name}
      </Text>
      <Text className="text-white text-l!" tag="span">
        {pokemonId}
      </Text>
      <div>
        {types.map((oneType) => {
          console.log(oneType);
          return (
            <Badge className="text-white text-l!" key={oneType}>
              {oneType}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
