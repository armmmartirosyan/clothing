"use client";

import { Button as MUIButton } from "@mui/material";
import { useFormStatus } from "react-dom";

export function Button({ children }: { children: any }) {
  const { pending } = useFormStatus();

  return (
    <MUIButton variant="contained" type="submit" disabled={pending}>
      {children}
    </MUIButton>
  );
}
