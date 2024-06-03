"use client";

import { RefObject, useRef } from "react";
import { ACCEPTED_IMAGE_TYPES_STRING } from "@/constants/shared-constants";
import { CloseIcon } from "@/components/shared-components";
import { addCarousel } from "@/actions/carousel-actions";
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
    const { error } = await addCarousel(formData);

    if (!error) {
      closeDialog();
    }
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.dialog_container}>
        <h2 className={styles.title}>Add carousel</h2>
        <form action={handleAdd} className={styles.form} ref={formRef}>
          <CloseIcon className={styles.close} onClick={closeDialog} />
          <input
            type="text"
            className={styles.input}
            placeholder="Carousel title"
            name="title"
            required
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Carousel text"
            name="text"
            required
          />
          <input
            type="file"
            accept={ACCEPTED_IMAGE_TYPES_STRING}
            className={styles.input}
            name="image"
            required
          />

          <Button>Add</Button>
        </form>
      </div>
    </dialog>
  );
}
