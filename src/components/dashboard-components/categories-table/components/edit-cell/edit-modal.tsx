"use client";

import { MouseEventHandler, RefObject, useRef } from "react";
import { ACCEPTED_IMAGE_TYPES_STRING } from "@/constants/shared-constants";
import { editCategory } from "@/actions/categories-actions";
import { CloseIcon } from "@/components/shared-components";
import { Button } from "@/components/shared-components";
import { ICategory } from "@/types";
import styles from "./index.module.css";

export function EditModal({
  dialogRef,
  category,
}: {
  dialogRef: RefObject<HTMLDialogElement>;
  category: ICategory;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const closeDialog = () => {
    dialogRef.current && dialogRef.current.close();
    formRef.current && formRef.current.reset();
  };

  const handleCloseIconClick: MouseEventHandler<SVGSVGElement> = (e) => {
    e.stopPropagation();
    closeDialog();
  };

  const handleEdit = async (formData: FormData) => {
    const { error } = await editCategory({
      id: category.id,
      formData,
    });

    if (!error) {
      closeDialog();
    }
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.dialog_container}>
        <h2 className={styles.title}>Edit category</h2>
        <form action={handleEdit} className={styles.form} ref={formRef}>
          <CloseIcon className={styles.close} onClick={handleCloseIconClick} />
          <input
            type="text"
            className={styles.input}
            placeholder="Category name"
            name="name"
            defaultValue={category.name}
            required
          />
          <input
            type="file"
            name="image"
            className={styles.input}
            accept={ACCEPTED_IMAGE_TYPES_STRING}
          />
          <Button>Edit</Button>
        </form>
      </div>
    </dialog>
  );
}
