"use client";

import { JSX } from "react";
import { useState } from "react";
import { CategorySelectProps } from "@/types/component-types";
import { useGetAllCategories } from "@/hooks";
import styles from "./index.module.css";

export function CategorySelect({
  defaultValue,
}: CategorySelectProps): JSX.Element {
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
