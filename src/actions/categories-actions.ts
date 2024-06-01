"use server";

import { revalidatePath } from "next/cache";
import {
  CATEGORY_HAS_PRODUCT,
  CATEGORY_NOT_FOUND,
  DELETE_IMAGE_FAIL,
} from "@/constants/messages";
import { backendClient } from "@/lib/edgestore-server";
import prisma from "@/lib/prisma";
import {
  EditActionArgs,
  GenericActionReturn,
  UploadImageReturn,
} from "@/types/action-types";
import {
  editCategorySchema,
  addCategorySchema,
  imageSchema,
} from "@/utils/validators";
import { ICategory } from "@/types";

export async function getCategories(): Promise<ICategory[]> {
  return await prisma.category.findMany();
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
        error: CATEGORY_NOT_FOUND,
      };
    }

    const productInThisCategory = await prisma.product.findMany({
      where: {
        categoryId,
      },
    });

    if (productInThisCategory.length) {
      return {
        error: CATEGORY_HAS_PRODUCT,
      };
    }

    const { success } = await backendClient.myPublicImages.deleteFile({
      url: category.imageUrl,
    });

    if (!success) {
      return {
        error: DELETE_IMAGE_FAIL,
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

  const validateNameResult = editCategorySchema.safeParse({ name });

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
        error: CATEGORY_NOT_FOUND,
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
          error: DELETE_IMAGE_FAIL,
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
