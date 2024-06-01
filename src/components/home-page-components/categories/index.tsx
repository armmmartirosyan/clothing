import { JSX } from "react";
import { getCategoriesForHome } from "@/actions/categories-actions";
import styles from "./index.module.css";

export async function Categories(): Promise<JSX.Element> {
  const categories = await getCategoriesForHome();

  return (
    <div className="category">
      <div className="container-fluid">
        <div className="row">
          {categories.map((category) => (
            <div className={`category-img ${styles.item}`} key={category.id}>
              <img src={category.imageUrl} alt={category.name} />
              <a className="category-name" href="">
                <h2>{category.name}</h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
