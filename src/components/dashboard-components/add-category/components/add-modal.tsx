"use client";

import CloseIcon from "@mui/icons-material/Close";
import { RefObject, useRef } from "react";
import { useEdgeStore } from "../../../../../lib/edgestore";
import { addCategory } from "@/actions/categories-actions";
import { AddButton } from "./index";
import styles from "../add-category.module.css";

export function AddModal({
  dialogRef,
}: {
  dialogRef: RefObject<HTMLDialogElement>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const { edgestore } = useEdgeStore();

  const handleAdd = async (formData: FormData) => {
    const name = (formData.get("name") || "") as string;
    const file = formData.get("image")! as File;

    try {
      const res = await edgestore.myPublicImages.upload({ file });
      const { error } = await addCategory({ name, imageUrl: res.url });

      if (!error) {
        dialogRef.current && dialogRef.current.close();
        formRef.current && formRef.current.reset();
      }
    } catch (e) {}
  };

  const handleCloseDialog = () => {
    dialogRef.current && dialogRef.current.close();
    formRef.current && formRef.current.reset();
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.dialog_container}>
        <CloseIcon className={styles.close} onClick={handleCloseDialog} />
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
          <AddButton />
        </form>
      </div>
    </dialog>
  );
}
