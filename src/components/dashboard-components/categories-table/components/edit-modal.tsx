"use client";

import CloseIcon from "@mui/icons-material/Close";
import { MouseEventHandler, RefObject, useRef } from "react";
import { editCategory } from "@/actions/categories-actions";
import { EditButton } from "./index";
import { ICategory } from "@/types";
import styles from "./generics.module.css";

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
        <CloseIcon className={styles.close} onClick={handleCloseIconClick} />
        <h2 className={styles.title}>Edit category</h2>
        <form action={handleEdit} className={styles.form} ref={formRef}>
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
            className={styles.input}
            name="image"
            accept="image/png, image/jpeg"
          />
          <EditButton />
        </form>
      </div>
    </dialog>
  );
}
