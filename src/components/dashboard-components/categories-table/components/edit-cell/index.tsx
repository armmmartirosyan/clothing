"use client";

import EditIcon from "@mui/icons-material/Edit";
import TableCell from "@mui/material/TableCell";
import { useRef } from "react";
import { EditModal } from "./edit-modal";
import { ICategory } from "@/types";

export function EditCell({ category }: { category: ICategory }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const hadleOpen = () => {
    dialogRef.current && dialogRef.current.showModal();
  };

  return (
    <TableCell onClick={hadleOpen}>
      <EditIcon sx={{ cursor: "pointer" }} />
      <EditModal dialogRef={dialogRef} category={category} />
    </TableCell>
  );
}
