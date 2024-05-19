"use server";

import { revalidatePath } from "next/cache";
import { ROWS_PER_PAGE } from "@/constants/shared-constants";
import { IGetCategoriesActionReturn } from "@/types";
import prisma from "../../lib/prisma";
import { backendClient } from "../../lib/edgestore-server";

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

export const addCategory = async ({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl: string;
}) => {
  try {
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
  name,
  imageUrl,
}: {
  id: string;
  name: string;
  imageUrl: string;
}) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      return {
        error: "Category not found",
      };
    }

    console.log({ id, name, imageUrl, category });

    if (imageUrl) {
      console.log("in iffff");

      const { success } = await backendClient.myPublicImages.deleteFile({
        url: category.imageUrl,
      });

      if (!success) {
        await backendClient.myPublicImages.deleteFile({
          url: imageUrl,
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
        imageUrl: imageUrl || category.imageUrl,
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
