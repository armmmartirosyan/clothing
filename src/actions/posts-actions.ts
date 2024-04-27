"use server";

/* @ts-ignore */
import prisma from "../../lib/prisma";
import { revalidateTag } from "next/cache";
import { AddPostActionType, GetPostsResult } from "@/types";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getPosts() {
  const res = await fetch(`${baseURL}api/get-posts`, {
    method: "GET",
    next: { tags: ["get-posts"] },
  });

  const result: GetPostsResult = await res.json();

  return result.posts;
}

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

    revalidateTag("get-posts");
    return { error: null };
  } catch (error: any) {
    return {
      error,
    };
  }
};

// export async function getPosts() {
//   /* @ts-ignore */
//   const posts = await prisma.post.findMany({
//     where: {
//       published: true,
//     },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });

//   return posts;
// }
