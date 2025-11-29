import { Text } from "../../UI/Text/Text";

export function PageTitle({ title }: { title: string }) {
  return <Text tag="h1">{title}</Text>;
}