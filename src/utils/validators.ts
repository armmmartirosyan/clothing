import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES } from "@/constants/shared-constants";

export const addCategorySchema = z.object({
  name: z.string(),
  image: z.any().refine((value) => ACCEPTED_IMAGE_TYPES.includes(value.type)),
});
