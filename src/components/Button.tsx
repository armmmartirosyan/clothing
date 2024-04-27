"use client";

import { useFormStatus } from "react-dom";
import styles from "@/styles/Home.module.css";

export function Button() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.button} disabled={pending}>
      {pending ? "Adding post..." : "Add post"}
    </button>
  );
}
