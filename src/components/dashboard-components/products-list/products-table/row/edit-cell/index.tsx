"use client";

import { JSX } from "react";
import EditIcon from "@mui/icons-material/Edit";
import TableCell from "@mui/material/TableCell";
import { useRef } from "react";
import { OnlyProductInObject } from "@/types/component-types";
import { EditModal } from "./edit-modal";

export function EditCell({ product }: OnlyProductInObject): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const hadleOpen = () => {
    dialogRef.current && dialogRef.current.showModal();
  };

  return (
    <TableCell onClick={hadleOpen}>
      <EditIcon sx={{ cursor: "pointer" }} />
      <EditModal dialogRef={dialogRef} product={product} />
    </TableCell>
  );
}
