"use server";

/* @ts-ignore */
import prisma from "../../lib/prisma";
import { revalidatePath } from "next/cache";
import { AddPostActionType } from "@/types";

export const addPost: AddPostActionType = async (formData: FormData) => {
  const content = formData.get("content");
  const title = formData.get("title");

  try {
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
    return { error: null };
  } catch (error: any) {
    return {
      error,
    };
  }
};

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
