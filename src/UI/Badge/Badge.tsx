import { Chip } from "@mui/material";
export function Badge({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return <Chip className={className} label={children} />;
}
