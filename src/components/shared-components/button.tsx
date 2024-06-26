"use client";

import { JSX } from "react";
import { useFormStatus } from "react-dom";
import { Button as MUIButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { OnlyChildrenProps } from "@/types/component-types";

export function Button({ children }: OnlyChildrenProps): JSX.Element {
  const { pending } = useFormStatus();

  return (
    <MUIButton variant="contained" type="submit" disabled={pending}>
      {pending ? <CircularProgress size={30} /> : children}
    </MUIButton>
  );
}
