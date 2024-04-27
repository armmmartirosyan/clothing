"use server";

import { revalidatePath } from "next/cache";
/* @ts-ignore */
import prisma from "../../lib/prisma";

export async function getPosts() {
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

export const addPost = async (formData: FormData) => {
  const content = formData.get("content");
  const title = formData.get("title");

  /* @ts-ignore */
  await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: {
        create: {
          name: "Armmm",
        },
      },
    },
  });

  revalidatePath("/");
};
