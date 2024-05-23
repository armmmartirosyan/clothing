import { useState } from "react";
import { useGetAllCategories } from "@/hooks";
import styles from "./generics.module.css";

export function CategorySelect({ defaultValue }: { defaultValue: string }) {
  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultValue);

  const categories = useGetAllCategories();

  return (
    <select
      name="categoryId"
      className={styles.input}
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
