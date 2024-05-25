"use client";

import CloseIcon from "@mui/icons-material/Close";
import { RefObject, useRef } from "react";
import { addCategory } from "@/actions/categories-actions";
import { Button } from "@/components/shared-components";
import styles from "./index.module.css";

export function AddModal({
  dialogRef,
}: {
  dialogRef: RefObject<HTMLDialogElement>;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const closeDialog = () => {
    dialogRef.current && dialogRef.current.close();
    formRef.current && formRef.current.reset();
  };

  const handleAdd = async (formData: FormData) => {
    const { error } = await addCategory(formData);

    if (!error) {
      closeDialog();
    }
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.dialog_container}>
        <CloseIcon className={styles.close} onClick={closeDialog} />
        <h2 className={styles.title}>Add category</h2>
        <form action={handleAdd} className={styles.form} ref={formRef}>
          <input
            type="text"
            className={styles.input}
            placeholder="Category name"
            name="name"
            required
          />
          <input
            type="file"
            className={styles.input}
            name="image"
            required
            accept="image/png, image/jpeg"
          />
          <Button>Add</Button>
        </form>
      </div>
    </dialog>
  );
}
