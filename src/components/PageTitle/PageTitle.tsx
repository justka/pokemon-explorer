import { Text } from "../../UI/Text/Text";
import { Image } from "../Image/Image";

export function PageTitle({ title }: { title: string }) {
  return (
    <>
      <Image src="src/assets/images/poke-ball.png" />
      <Text tag="h1">{title}</Text>{" "}
    </>
  );
}
