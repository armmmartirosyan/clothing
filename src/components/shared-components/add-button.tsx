"use client";

import Button from "@mui/material/Button";
import { useFormStatus } from "react-dom";

export function AddButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="contained" type="submit" disabled={pending}>
      Add
    </Button>
  );
}
