"use client";

import { JSX } from "react";
import { useState } from "react";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import { DeleteCellProps } from "@/types/component-types";

export function DeleteCell({ id, action }: DeleteCellProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    if (loading) return;

    setLoading(true);

    const { error } = await action(id);

    setLoading(false);

    if (error) {
      alert(error);
    }
  };

  return (
    <TableCell onClick={handleDelete}>
      {loading ? (
        <CircularProgress size={30} />
      ) : (
        <DeleteIcon sx={{ cursor: "pointer" }} />
      )}
    </TableCell>
  );
}
