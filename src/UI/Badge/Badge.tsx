import { Chip } from "@mui/material";
export function Badge({ children }: { children: string }) {
  return <Chip label={children} />;
}
