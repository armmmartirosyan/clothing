"use client";

import Button from "@mui/material/Button";
import { useFormStatus } from "react-dom";

export function EditButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="contained" type="submit" disabled={pending}>
      Edit
    </Button>
  );
}
