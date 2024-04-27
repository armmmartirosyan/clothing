import { AddPost } from "@/components/AddPost";
import { getPosts } from "@/actions/posts-actions";
import styles from "@/styles/Home.module.css";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className={styles.main}>
      <AddPost />
      <ul className={styles.posts_list}>
        {posts &&
          posts.length &&
          posts.map((post: any) => (
            <li key={post.id} className={styles.list_item}>
              {post.title}
            </li>
          ))}
      </ul>
    </main>
  );
}
