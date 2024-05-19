"use client";

import CloseIcon from "@mui/icons-material/Close";
import { MouseEventHandler, RefObject, useRef } from "react";
import { useEdgeStore } from "../../../../../lib/edgestore";
import { editCategory } from "@/actions/categories-actions";
import { EditButton } from "./index";
import styles from "./generics.module.css";
import { ICategory } from "@/types";

export function EditModal({
  dialogRef,
  category,
}: {
  dialogRef: RefObject<HTMLDialogElement>;
  category: ICategory;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const { edgestore } = useEdgeStore();

  const handleEdit = async (formData: FormData) => {
    const name = (formData.get("name") || "") as string;
    const file = formData.get("image") as File;

    try {
      let res = {} as {
        url: string;
        thumbnailUrl: string | null;
        size: number;
        uploadedAt: Date;
        metadata: Record<string, never>;
        path: Record<string, never>;
        pathOrder: string[];
      };

      if (file.name && file.size) {
        res = await edgestore.myPublicImages.upload({ file });
      }

      const { error } = await editCategory({
        id: category.id,
        name,
        imageUrl: res.url || "",
      });

      console.log({ error });

      if (!error) {
        dialogRef.current && dialogRef.current.close();
        formRef.current && formRef.current.reset();
      }
    } catch (e) {}
  };

  const handleCloseDialog: MouseEventHandler<SVGSVGElement> = (e) => {
    e.stopPropagation();
    dialogRef.current && dialogRef.current.close();
    formRef.current && formRef.current.reset();
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.dialog_container}>
        <CloseIcon className={styles.close} onClick={handleCloseDialog} />
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
