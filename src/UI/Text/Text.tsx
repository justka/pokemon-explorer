import { Typography } from "@mui/material";

export function Text({ children, tag }: { children: string; tag: any }) {
  return (
    <Typography variant={tag} component={tag}>
      {children}
    </Typography>
  );
}
