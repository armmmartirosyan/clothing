"use client";

import { JSX } from "react";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { AddModal } from "./add-modal";
import styles from "./index.module.css";

export function AddCategory(): JSX.Element {
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
        Add category
      </Button>

      <AddModal dialogRef={dialogRef} />
    </div>
  );
}
