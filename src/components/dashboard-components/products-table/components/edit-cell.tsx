"use client";

import EditIcon from "@mui/icons-material/Edit";
import TableCell from "@mui/material/TableCell";
import { useRef } from "react";
import { EditModal } from "./index";
import { IProduct } from "@/types";

export function EditCell({ product }: { product: IProduct }) {
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
