import { JSX } from "react";
import { CategoriesTable } from "./categories-table";
import { getCategories } from "@/actions/categories-actions";

export async function CategoriesList(): Promise<JSX.Element> {
  const categories = await getCategories();

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <CategoriesTable categories={categories} />
    </div>
  );
}
