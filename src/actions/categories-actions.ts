"use server";

import { revalidatePath } from "next/cache";
import { ROWS_PER_PAGE } from "@/constants/shared-constants";
import { backendClient } from "../../lib/edgestore-server";
import { IGetCategoriesActionReturn } from "@/types";
import prisma from "../../lib/prisma";

export async function getCategories(
  page: number
): Promise<IGetCategoriesActionReturn> {
  const [totalCount, categories] = await prisma.$transaction([
    prisma.category.count(),
    prisma.category.findMany({
      skip: (page - 1) * ROWS_PER_PAGE,
      take: ROWS_PER_PAGE,
    }),
  ]);

  const pageCount = Math.ceil(totalCount / ROWS_PER_PAGE);

  return { categories, pageCount };
}

export const addCategory = async (formData: FormData) => {
  const name = (formData.get("name") || "") as string;
  const file = formData.get("image")! as File;

  try {
    const blob = new Blob([file], { type: file.type });

    const { url: imageUrl } = await backendClient.myPublicImages.upload({
      content: {
        blob,
        extension: file.type,
      },
    });

    await prisma.category.create({
      data: {
        imageUrl,
        name,
      },
    });

    revalidatePath("/dashboard/categories");
    return { error: null };
  } catch (error: any) {
    return {
      error,
    };
  }
};

export const deleteCategory = async (categoryId: string) => {
  try {
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      return {
        error: "Category not found",
      };
    }

    const { success } = await backendClient.myPublicImages.deleteFile({
      url: category.imageUrl,
    });

    if (!success) {
      return {
        error: "Failed to delete image",
      };
    }

    await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });

    revalidatePath("/dashboard/categories");
    return { error: null };
  } catch (error: any) {
    return {
      error,
    };
  }
};

export const editCategory = async ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) => {
  const name = (formData.get("name") || "") as string;
  const file = formData.get("image") as File;

  try {
    let res = {} as {
      url: string;
      size: number;
      metadata: Record<string, never>;
      path: Record<string, never>;
      pathOrder: string[];
    };

    if (file.name && file.size) {
      const blob = new Blob([file], { type: file.type });

      res = await backendClient.myPublicImages.upload({
        content: {
          blob,
          extension: file.type,
        },
      });
    }

    const category = await prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      return {
        error: "Category not found",
      };
    }

    if (res.url) {
      console.log("in iffff");

      const { success } = await backendClient.myPublicImages.deleteFile({
        url: category.imageUrl,
      });

      if (!success) {
        await backendClient.myPublicImages.deleteFile({
          url: res.url,
        });

        return {
          error: "Failed to delete image",
        };
      }
    }

    await prisma.category.update({
      where: {
        id,
      },
      data: {
        imageUrl: res.url || category.imageUrl,
        name,
      },
    });

    revalidatePath("/dashboard/categories");
    return { error: null };
  } catch (error: any) {
    return {
      error,
    };
  }
};
