"use client";

import Button from "@mui/material/Button";
import { useRef } from "react";
import { AddModal } from "./add-modal";
import styles from "./index.module.css";

export function AddCarousel() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenDialog = () => {
    dialogRef.current && dialogRef.current.showModal();
  };

  return (
    <div className={styles.wrapper}>
      <Button
        variant="contained"
        className={styles.button}
        onClick={handleOpenDialog}
      >
        Add carousel
      </Button>

      <AddModal dialogRef={dialogRef} />
    </div>
  );
}
