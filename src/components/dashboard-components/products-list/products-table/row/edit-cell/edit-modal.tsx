"use client";

import { MouseEventHandler, useRef, JSX } from "react";
import { ACCEPTED_IMAGE_TYPES_STRING } from "@/constants/shared-constants";
import { ProductEditModalProps } from "@/types/component-types";
import { CloseIcon } from "@/components/shared-components";
import { editProduct } from "@/actions/products-actions";
import { Button } from "@/components/shared-components";
import { CategorySelect } from "./category-select";
import styles from "./index.module.css";

export function EditModal({
  dialogRef,
  product,
}: ProductEditModalProps): JSX.Element {
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
    const { error } = await editProduct({
      id: product.id,
      formData,
    });

    if (!error) {
      closeDialog();
    }
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.dialog_container}>
        <h2 className={styles.title}>Edit product</h2>
        <form action={handleEdit} className={styles.form} ref={formRef}>
          <CloseIcon className={styles.close} onClick={handleCloseIconClick} />
          <input
            type="text"
            className={styles.input}
            placeholder="Product name"
            defaultValue={product.name}
            name="name"
            required
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Description"
            defaultValue={product.description}
            name="description"
            required
          />
          <input
            type="number"
            className={styles.input}
            defaultValue={product.price}
            placeholder="Price"
            name="price"
            required
          />
          <input
            type="number"
            className={styles.input}
            defaultValue={product.oldPrice}
            placeholder="Old price"
            name="oldPrice"
            required
          />

          <CategorySelect defaultValue={product.categoryId} />

          <input
            type="file"
            name="image"
            className={styles.input}
            accept={ACCEPTED_IMAGE_TYPES_STRING}
          />

          <label htmlFor="is-new">
            <input
              type="checkbox"
              className={styles.input}
              defaultChecked={product.isNew}
              placeholder="Is new"
              name="isNew"
              id="is-new"
            />
            Is new?
          </label>
          <Button>Edit</Button>
        </form>
      </div>
    </dialog>
  );
}
