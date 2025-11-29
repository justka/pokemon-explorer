import { Text } from "../../UI/Text/Text";
import { Image } from "../Image/Image";

export function PageTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <Image src="src/assets/images/poke-ball.png" />
      <Text className="text-orange-500 text-xl! font-bold!" tag="h1">
        {title}
      </Text>
    </div>
  );
}
