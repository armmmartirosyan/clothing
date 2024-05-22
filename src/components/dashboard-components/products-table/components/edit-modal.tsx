"use client";

import CloseIcon from "@mui/icons-material/Close";
import { MouseEventHandler, RefObject, useRef } from "react";
import { EditButton } from "./index";
import { IProduct } from "@/types";
import styles from "./generics.module.css";
import { editProduct } from "@/actions/products-actions";

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
        <h2 className={styles.title}>Edit category</h2>
        <form action={handleEdit} className={styles.form} ref={formRef}>
          <input
            type="text"
            className={styles.input}
            placeholder="Product name"
            name="name"
            defaultValue={product.name}
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
