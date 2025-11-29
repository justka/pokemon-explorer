import { Typography } from "@mui/material";

export function Text({
  className,
  children,
  tag,
}: {
  className?: string;
  children: string;
  tag: any;
}) {
  return (
    <Typography className={className} variant={tag} component={tag}>
      {children}
    </Typography>
  );
}
