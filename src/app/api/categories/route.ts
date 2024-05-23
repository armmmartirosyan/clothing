import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ICategory } from "@/types";

export async function GET(): Promise<NextResponse<ICategory[]>> {
  const categories = await prisma.category.findMany();

  return NextResponse.json(categories, { status: 200 });
}
