"use client";

import { RefObject, useRef } from "react";
import { ACCEPTED_IMAGE_TYPES_STRING } from "@/constants/shared-constants";
import { CloseIcon } from "@/components/shared-components";
import { addProduct } from "@/actions/products-actions";
import { Button } from "@/components/shared-components";
import { CategorySelect } from "./category-select";
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
        <h2 className={styles.title}>Add product</h2>
        <form action={handleAdd} className={styles.form} ref={formRef}>
          <CloseIcon className={styles.close} onClick={closeDialog} />
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
            required
            type="file"
            name="image"
            className={styles.input}
            accept={ACCEPTED_IMAGE_TYPES_STRING}
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
