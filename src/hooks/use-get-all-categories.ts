"use client";

import { useEffect, useState } from "react";
import { ICategory } from "@/types";

export function useGetAllCategories(): ICategory[] {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    fetch("/api/categories").then(async (res: Response) => {
      const categoriesList = await res.json();
      setCategories(categoriesList);
    });
  }, []);

  return categories;
}
