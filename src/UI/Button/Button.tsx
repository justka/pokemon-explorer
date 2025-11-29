import ButtonMui from "@mui/material/Button";

export function Button({ children }: { children: React.ReactNode }) {
  return <ButtonMui variant="contained">{children}</ButtonMui>;
}
