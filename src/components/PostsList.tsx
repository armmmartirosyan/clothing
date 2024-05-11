import { getPosts } from "@/actions/posts-actions";
import styles from "@/styles/Test.module.css";

export async function PostsList() {
  const posts = await getPosts();

  return (
    <ul className={styles.posts_list}>
      {posts &&
        posts.length &&
        posts.map((post: any) => (
          <li key={post.id} className={styles.list_item}>
            {post.title}
          </li>
        ))}
    </ul>
  );
}
