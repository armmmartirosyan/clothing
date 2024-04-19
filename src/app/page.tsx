import { cookies } from "next/headers";
/* @ts-ignore */
import prisma from "../../lib/prisma";
import { AddPost } from "@/components/AddPost";

async function getPosts() {
  /* @ts-ignore */
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  console.log({ cookies });
  alert(new Date().toISOString());

  return (
    <main>
      {posts &&
        posts.length &&
        posts.map((post: any) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
          </div>
        ))}

      <AddPost />
    </main>
  );
}
