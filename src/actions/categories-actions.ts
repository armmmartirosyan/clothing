"use server";

import { revalidatePath } from "next/cache";
import { ROWS_PER_PAGE } from "@/constants/shared-constants";
import { backendClient } from "@/lib/edgestore-server";
import prisma from "@/lib/prisma";
import {
  EditActionArgs,
  GenericActionReturn,
  GetCategoriesActionReturn,
  UploadImageReturn,
} from "@/types/action-types";
import {
  addCategorySchema,
  pageSchema,
  imageSchema,
  nameSchema,
} from "@/utils/validators";

export async function getCategories(
  pageFromFront: number
): Promise<GetCategoriesActionReturn> {
  let page = pageFromFront;
  const validatedPage = pageSchema.safeParse(page);

  if (!validatedPage.success) {
    page = 1;
  }

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

export async function addCategory(
  formData: FormData
): Promise<GenericActionReturn> {
  const name = (formData.get("name") || "") as string;
  const image = formData.get("image")! as File;

  const validatedCategoryData = addCategorySchema.safeParse({
    name,
    image,
  });

  if (!validatedCategoryData.success) {
    return {
      error: validatedCategoryData.error.message,
    };
  }

  try {
    const blob = new Blob([image], { type: image.type });

    const { url: imageUrl } = await backendClient.myPublicImages.upload({
      content: {
        blob,
        extension: image.type,
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
}

export async function deleteCategory(
  categoryId: string
): Promise<GenericActionReturn> {
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
}

export async function editCategory({
  id,
  formData,
}: EditActionArgs): Promise<GenericActionReturn> {
  const name = (formData.get("name") || "") as string;
  const image = formData.get("image") as File;

  const validateNameResult = nameSchema.safeParse(name);

  if (!validateNameResult.success) {
    return {
      error: validateNameResult.error.message,
    };
  }

  try {
    let res = {} as UploadImageReturn;

    const validatedImage = imageSchema.safeParse(image);

    if (validatedImage.success) {
      const blob = new Blob([image], { type: image.type });

      res = await backendClient.myPublicImages.upload({
        content: {
          blob,
          extension: image.type,
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
}
