"use server";

import { revalidatePath } from "next/cache";
import { ROWS_PER_PAGE } from "@/constants/shared-constants";
import { backendClient } from "@/lib/edgestore-server";
import { IGetProductsActionReturn } from "@/types";
import prisma from "@/lib/prisma";

export async function getProducts(
  page: number
): Promise<IGetProductsActionReturn> {
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

export const addProduct = async (formData: FormData) => {
  const name = (formData.get("name") || "") as string;
  const description = (formData.get("description") || "") as string;
  const price = Number(formData.get("price"));
  const oldPrice = Number(formData.get("oldPrice"));
  const isNew = !!formData.get("isNew");
  const categoryId = (formData.get("categoryId") || "") as string;
  const file = formData.get("image")! as File;

  console.log({
    name,
    description,
    price,
    oldPrice,
    isNew,
    categoryId,
    file,
  });

  return { error: "" };

  // try {
  //   const blob = new Blob([file], { type: file.type });

  //   const { url: imageUrl } = await backendClient.myPublicImages.upload({
  //     content: {
  //       blob,
  //       extension: file.type,
  //     },
  //   });

  //   await prisma.product.create({
  //     data: {
  //       imageUrl,
  //       name,
  //       description,
  //       price,
  //       oldPrice,
  //       isNew,
  //       categoryId,
  //     },
  //   });

  //   revalidatePath("/dashboard/products");
  //   return { error: null };
  // } catch (error: any) {
  //   return {
  //     error,
  //   };
  // }
};

export const deleteProduct = async (productId: string) => {
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
};

export const editProduct = async ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) => {
  const name = (formData.get("name") || "") as string;
  const description = (formData.get("description") || "") as string;
  const price = Number(formData.get("price"));
  const oldPrice = Number(formData.get("oldPrice"));
  const isNew = !!Number(formData.get("name"));
  const categoryId = (formData.get("categoryId") || "") as string;
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
};
