"use server";

import { revalidatePath } from "next/cache";
import { ROWS_PER_PAGE } from "@/constants/shared-constants";
import { backendClient } from "@/lib/edgestore-server";
import prisma from "@/lib/prisma";
import {
  EditActionArgs,
  GenericActionReturn,
  GetProductsActionReturn,
  UploadImageReturn,
} from "@/types/action-types";
import {
  addProductSchema,
  editProductSchema,
  imageSchema,
  pageSchema,
} from "@/utils/validators";

export async function getProducts(
  pageFromFront: number
): Promise<GetProductsActionReturn> {
  let page = pageFromFront;
  const validatedPage = pageSchema.safeParse(page);

  if (!validatedPage.success) {
    page = 1;
  }

  const [totalCount, products] = await prisma.$transaction([
    prisma.product.count(),
    prisma.product.findMany({
      skip: (page - 1) * ROWS_PER_PAGE,
      take: ROWS_PER_PAGE,
    }),
  ]);

  const pageCount = Math.ceil(totalCount / ROWS_PER_PAGE);

  return { products, pageCount };
}

export async function addProduct(
  formData: FormData
): Promise<GenericActionReturn> {
  const name = (formData.get("name") || "") as string;
  const description = (formData.get("description") || "") as string;
  const price = Number(formData.get("price"));
  const oldPrice = Number(formData.get("oldPrice"));
  const isNew = !!formData.get("isNew");
  const categoryId = (formData.get("categoryId") || "") as string;
  const image = formData.get("image")! as File;

  const validatedResult = addProductSchema.safeParse({
    name,
    description,
    price,
    oldPrice,
    isNew,
    categoryId,
    image,
  });

  if (!validatedResult.success) {
    return {
      error: validatedResult.error.message,
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

    await prisma.product.create({
      data: {
        imageUrl,
        name,
        description,
        price,
        oldPrice,
        isNew,
        categoryId,
      },
    });

    revalidatePath("/dashboard/products");
    return { error: null };
  } catch (error: any) {
    return {
      error,
    };
  }
}

export async function deleteProduct(
  productId: string
): Promise<GenericActionReturn> {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      return {
        error: "Product not found",
      };
    }

    const { success } = await backendClient.myPublicImages.deleteFile({
      url: product.imageUrl,
    });

    if (!success) {
      return {
        error: "Failed to delete image",
      };
    }

    await prisma.product.delete({
      where: {
        id: productId,
      },
    });

    revalidatePath("/dashboard/products");
    return { error: null };
  } catch (error: any) {
    return {
      error,
    };
  }
}

export async function editProduct({
  id,
  formData,
}: EditActionArgs): Promise<GenericActionReturn> {
  const name = (formData.get("name") || "") as string;
  const description = (formData.get("description") || "") as string;
  const price = Number(formData.get("price"));
  const oldPrice = Number(formData.get("oldPrice"));
  const isNew = !!formData.get("isNew");
  const categoryId = (formData.get("categoryId") || "") as string;
  const image = formData.get("image") as File;

  const validatedResult = editProductSchema.safeParse({
    name,
    description,
    price,
    oldPrice,
    isNew,
    categoryId,
  });

  if (!validatedResult.success) {
    return {
      error: validatedResult.error.message,
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

    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return {
        error: "Product not found",
      };
    }

    if (res.url) {
      const { success } = await backendClient.myPublicImages.deleteFile({
        url: product.imageUrl,
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

    await prisma.product.update({
      where: {
        id,
      },
      data: {
        imageUrl: res.url || product.imageUrl,
        name,
        description,
        price,
        oldPrice,
        isNew,
        categoryId,
      },
    });

    revalidatePath("/dashboard/products");
    return { error: null };
  } catch (error: any) {
    return {
      error,
    };
  }
}
