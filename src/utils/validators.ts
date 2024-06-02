import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES } from "@/constants/shared-constants";

export const pageSchema = z.coerce.number().int().gte(1);
export const categoryIdSchema = z.array(z.string()).min(1);
export const searchSchema = z.string().min(1);

export const imageSchema = z
  .any()
  .refine((value) => ACCEPTED_IMAGE_TYPES.includes(value.type));

export const addCategorySchema = z.object({
  name: z.string(),
  image: imageSchema,
});

export const addProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  oldPrice: z.number(),
  isNew: z.boolean(),
  categoryId: z.string(),
  image: imageSchema,
});

export const addCarouselSchema = z.object({
  title: z.string(),
  text: z.string(),
  image: imageSchema,
});

export const editCategorySchema = addCategorySchema.omit({ image: true });
export const editProductSchema = addProductSchema.omit({ image: true });
export const editCarouselSchema = addCarouselSchema.omit({ image: true });
