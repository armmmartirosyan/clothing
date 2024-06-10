import { NextResponse } from "next/server";
import { prisma } from "prisma-client";
import { GetCategoriesApiReturn } from "@/types";

export async function GET(): Promise<GetCategoriesApiReturn> {
  const categories = await prisma.category.findMany();

  return NextResponse.json(categories, { status: 200 });
}
