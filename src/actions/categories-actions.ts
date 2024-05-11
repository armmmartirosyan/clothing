"use server";

import { ROWS_PER_PAGE } from "@/constants/shared-constants";
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
