import BadgeMui from "@mui/material/Badge";
export function Badge({ children }: { children: string }) {
  return <BadgeMui badgeContent={children} color="primary"></BadgeMui>;
}
