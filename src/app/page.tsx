import { Suspense } from "react";
import { AddPost, PostsList } from "@/components";
import styles from "@/styles/Home.module.css";

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
