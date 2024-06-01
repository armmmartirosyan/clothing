import { JSX } from "react";
import { getCategories } from "@/actions/categories-actions";

export async function Categories(): Promise<JSX.Element> {
  const categories = await getCategories();

  return (
    <div className="category">
      <div className="container-fluid">
        <div className="row">
          {categories.map((category) => (
            <div className="category-img" key={category.id}>
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
