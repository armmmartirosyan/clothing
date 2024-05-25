"use client";

import EditIcon from "@mui/icons-material/Edit";
import TableCell from "@mui/material/TableCell";
import { useRef } from "react";
import { EditModal } from "./edit-modal";
import { ICarousel, IProduct } from "@/types";

export function EditCell({ carouselItem }: { carouselItem: ICarousel }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const hadleOpen = () => {
    dialogRef.current && dialogRef.current.showModal();
  };

  return (
    <TableCell onClick={hadleOpen}>
      <EditIcon sx={{ cursor: "pointer" }} />
      <EditModal dialogRef={dialogRef} carouselItem={carouselItem} />
    </TableCell>
  );
}
