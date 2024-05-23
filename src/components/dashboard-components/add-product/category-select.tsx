import { useGetAllCategories } from "@/hooks";
import styles from "./index.module.css";

export function CategorySelect() {
  const categories = useGetAllCategories();

  return (
    <select name="categoryId" className={styles.input}>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
