import { Text } from "../../UI/Text/Text";
import { Badge } from "../Badge/Badge";
import { Image} from "../Image/Image";

export function Tile() {
  return (
    <div>
      <Image src="https://placehold.co/20"/>
      <Text tag="span">Bulbasaur</Text>
      <Text tag="span">#001</Text>
      <div><Badge>Grass</Badge><Badge>Poison</Badge></div>
    </div>
  );
}
