"use client";

import Button from "@mui/material/Button";
import { useRef } from "react";
import { AddModal } from "./components";
import styles from "./add-product.module.css";

export function AddProduct() {
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
