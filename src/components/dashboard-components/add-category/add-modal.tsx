"use client";

import { RefObject, useRef } from "react";
import { ACCEPTED_IMAGE_TYPES_STRING } from "@/constants/shared-constants";
import { addCategory } from "@/actions/categories-actions";
import { CloseIcon } from "@/components/shared-components";
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
        <h2 className={styles.title}>Add category</h2>
        <form action={handleAdd} className={styles.form} ref={formRef}>
          <CloseIcon className={styles.close} onClick={closeDialog} />
          <input
            type="text"
            className={styles.input}
            placeholder="Category name"
            name="name"
            required
          />
          <input
            accept={ACCEPTED_IMAGE_TYPES_STRING}
            className={styles.input}
            name="image"
            type="file"
            required
          />
          <Button>Add</Button>
        </form>
      </div>
    </dialog>
  );
}
