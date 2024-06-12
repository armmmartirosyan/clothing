"use client";

import { useRef, JSX } from "react";
import Button from "@mui/material/Button";
import { AddModal } from "./add-modal";
import styles from "./index.module.css";

export function AddProduct(): JSX.Element {
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
        Add product
      </Button>

      <AddModal dialogRef={dialogRef} />
    </div>
  );
}
