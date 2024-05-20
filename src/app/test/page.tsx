import { Suspense } from "react";
import { AddPost, PostsList } from "@/components";
import styles from "@/styles/Test.module.css";
import Link from "next/link";

export default async function Home() {
  return (
    <main className={styles.main}>
      <AddPost />
      <Suspense fallback={"Loading..."}>
        <PostsList />
      </Suspense>
    </main>
  );
}