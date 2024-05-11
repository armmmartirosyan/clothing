"use client";

import { useRef } from "react";
import { addPost } from "@/actions/posts-actions";
import { Button } from "./index";
import styles from "@/styles/Test.module.css";

export function AddPost() {
  const ref = useRef<HTMLFormElement>(null);

  const handleFormAction = async (formData: FormData) => {
    const { error } = await addPost(formData);

    if (error) {
      alert("Something went wrong");
      return;
    }

    ref.current?.reset();
  };

  return (
    <form action={handleFormAction} ref={ref}>
      <input
        required
        type="text"
        name="title"
        placeholder="Title"
        className={styles.input}
      />
      <input
        required
        type="text"
        name="content"
        placeholder="Content"
        className={styles.input}
      />

      <Button />
    </form>
  );
}
