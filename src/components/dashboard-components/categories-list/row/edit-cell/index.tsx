"use client";

import { JSX } from "react";
import EditIcon from "@mui/icons-material/Edit";
import TableCell from "@mui/material/TableCell";
import { useRef } from "react";
import { EditModal } from "./edit-modal";
import { OnlyCategoryInProps } from "@/types/component-types";

export function EditCell({ category }: OnlyCategoryInProps): JSX.Element {
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
