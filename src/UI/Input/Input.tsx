import { TextField } from "@mui/material";

export function Input({ placeholder }: { placeholder: string }) {
  return <TextField placeholder={placeholder} variant="outlined" />;
}
