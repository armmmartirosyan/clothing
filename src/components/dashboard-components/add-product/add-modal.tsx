"use client";

import CloseIcon from "@mui/icons-material/Close";
import { RefObject, useRef } from "react";
import { addProduct } from "@/actions/products-actions";
import { CategorySelect } from "./category-select";
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
    const { error } = await addProduct(formData);

    if (!error) {
      closeDialog();
    }
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.dialog_container}>
        <CloseIcon className={styles.close} onClick={closeDialog} />
        <h2 className={styles.title}>Add product</h2>
        <form action={handleAdd} className={styles.form} ref={formRef}>
          <input
            type="text"
            className={styles.input}
            placeholder="Product name"
            name="name"
            required
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Description"
            name="description"
            required
          />
          <input
            type="number"
            className={styles.input}
            placeholder="Price"
            name="price"
            required
          />
          <input
            type="number"
            className={styles.input}
            placeholder="Old price"
            name="oldPrice"
            required
          />

          <CategorySelect />

          <input
            type="file"
            className={styles.input}
            name="image"
            required
            accept="image/png, image/jpeg"
          />

          <label htmlFor="is-new">
            <input
              type="checkbox"
              className={styles.input}
              placeholder="Is new"
              name="isNew"
              id="is-new"
            />
            Is new?
          </label>
          <Button>Add</Button>
        </form>
      </div>
    </dialog>
  );
}
