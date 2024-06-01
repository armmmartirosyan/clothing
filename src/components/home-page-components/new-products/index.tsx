import { JSX } from "react";
import { Carousel } from "./carousel";
import { getNewProducts } from "@/actions/products-actions";
import styles from "./index.module.css";

export async function NewProducts(): Promise<JSX.Element> {
  const products = await getNewProducts();

  return (
    <div className="recent-product">
      <div className={`container ${styles.container}`}>
        <div className="section-header">
          <h3>New Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            viverra at massa sit amet ultricies. Nullam consequat, mauris non
            interdum cursus
          </p>
        </div>
        <Carousel products={products} />
      </div>
    </div>
  );
}
