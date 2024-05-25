"use client";

import { MouseEventHandler, RefObject, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ACCEPTED_IMAGE_TYPES_STRING } from "@/constants/shared-constants";
import { editCarousel } from "@/actions/carousel-actions";
import { Button } from "@/components/shared-components";
import { ICarousel } from "@/types";
import styles from "./index.module.css";

export function EditModal({
  dialogRef,
  carouselItem,
}: {
  dialogRef: RefObject<HTMLDialogElement>;
  carouselItem: ICarousel;
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
    const { error } = await editCarousel({
      id: carouselItem.id,
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
        <h2 className={styles.title}>Edit carousel</h2>
        <form action={handleEdit} className={styles.form} ref={formRef}>
          <input
            type="text"
            className={styles.input}
            placeholder="Carousel title"
            defaultValue={carouselItem.title}
            name="title"
            required
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Carousel text"
            defaultValue={carouselItem.text}
            name="text"
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
