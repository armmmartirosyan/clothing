"use client";

import { MouseEventHandler, RefObject, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@/components/shared-components";
import { editProduct } from "@/actions/products-actions";
import { CategorySelect } from "./category-select";
import { IProduct } from "@/types";
import styles from "./index.module.css";

export function EditModal({
  dialogRef,
  product,
}: {
  dialogRef: RefObject<HTMLDialogElement>;
  product: IProduct;
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
        <CloseIcon className={styles.close} onClick={handleCloseIconClick} />
        <h2 className={styles.title}>Edit product</h2>
        <form action={handleEdit} className={styles.form} ref={formRef}>
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
            className={styles.input}
            name="image"
            accept="image/png, image/jpeg"
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