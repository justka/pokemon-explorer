import { TextField } from "@mui/material";

export function Input({ placeholder }: { placeholder: string }) {
  return (
    <TextField
      className="[&_input]:p-2! [&>div]:rounded-2xl! [&_input]:w-[400px]!"
      placeholder={placeholder}
      variant="outlined"
    />
  );
}
