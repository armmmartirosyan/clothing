"use server";

import { revalidatePath } from "next/cache";
import { CAROUSEL_NOT_FOUND, DELETE_IMAGE_FAIL } from "@/constants/messages";
import { backendClient } from "@/lib/edgestore-server";
import prisma from "@/lib/prisma";
import {
  EditActionArgs,
  GenericActionReturn,
  GetCarouselAction,
  UploadImageReturn,
} from "@/types/action-types";
import {
  addCarouselSchema,
  editCarouselSchema,
  imageSchema,
} from "@/utils/validators";

export async function getCarousel(): Promise<GetCarouselAction> {
  return await prisma.carousel.findMany();
}

export async function addCarousel(
  formData: FormData
): Promise<GenericActionReturn> {
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
}

export async function deleteCarousel(id: string): Promise<GenericActionReturn> {
  try {
    const carousel = await prisma.carousel.findUnique({
      where: { id },
    });

    if (!carousel) {
      return {
        error: CAROUSEL_NOT_FOUND,
      };
    }

    const { success } = await backendClient.myPublicImages.deleteFile({
      url: carousel.imageUrl,
    });

    if (!success) {
      return {
        error: DELETE_IMAGE_FAIL,
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
}

export async function editCarousel({
  id,
  formData,
}: EditActionArgs): Promise<GenericActionReturn> {
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

    const carousel = await prisma.carousel.findUnique({
      where: { id },
    });

    if (!carousel) {
      return {
        error: CAROUSEL_NOT_FOUND,
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
          error: DELETE_IMAGE_FAIL,
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
}
