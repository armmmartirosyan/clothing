"use server";

import { revalidatePath } from "next/cache";
import { backendClient } from "@/lib/edgestore-server";
import { ICarousel } from "@/types";
import prisma from "@/lib/prisma";
import {
  addCarouselSchema,
  addProductSchema,
  editCarouselSchema,
  editProductSchema,
  imageSchema,
  pageSchema,
} from "@/utils/validators";

export async function getCarousel(): Promise<ICarousel[]> {
  return await prisma.carousel.findMany();
}

export const addCarousel = async (formData: FormData) => {
  const title = (formData.get("title") || "") as string;
  const text = (formData.get("text") || "") as string;
  const image = formData.get("image")! as File;

  const validatedResult = addCarouselSchema.safeParse({
    title,
    text,
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

    await prisma.carousel.create({
      data: {
        imageUrl,
        title,
        text,
      },
    });

    revalidatePath("/dashboard/carousel");
    return { error: null };
  } catch (error: any) {
    return {
      error,
    };
  }
};

export const deleteCarousel = async (id: string) => {
  try {
    const carousel = await prisma.carousel.findUnique({
      where: { id },
    });

    if (!carousel) {
      return {
        error: "Carousel not found",
      };
    }

    const { success } = await backendClient.myPublicImages.deleteFile({
      url: carousel.imageUrl,
    });

    if (!success) {
      return {
        error: "Failed to delete image",
      };
    }

    await prisma.product.delete({
      where: { id },
    });

    revalidatePath("/dashboard/carousel");
    return { error: null };
  } catch (error: any) {
    return {
      error,
    };
  }
};

export const editCarousel = async ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) => {
  const title = (formData.get("title") || "") as string;
  const text = (formData.get("text") || "") as string;
  const image = formData.get("image") as File;

  const validatedResult = editCarouselSchema.safeParse({
    title,
    text,
  });

  if (!validatedResult.success) {
    return {
      error: validatedResult.error.message,
    };
  }

  try {
    let res = {} as {
      url: string;
      size: number;
      metadata: Record<string, never>;
      path: Record<string, never>;
      pathOrder: string[];
    };

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

    const carousel = await prisma.carousel.findUnique({
      where: { id },
    });

    if (!carousel) {
      return {
        error: "Carousel not found",
      };
    }

    if (res.url) {
      const { success } = await backendClient.myPublicImages.deleteFile({
        url: carousel.imageUrl,
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

    await prisma.carousel.update({
      where: {
        id,
      },
      data: {
        imageUrl: res.url || carousel.imageUrl,
        title,
        text,
      },
    });

    revalidatePath("/dashboard/carousel");
    return { error: null };
  } catch (error: any) {
    return {
      error,
    };
  }
};
