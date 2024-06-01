import { JSX } from "react";
import { Carousel } from "./carousel";
import { getNewProducts } from "@/actions/products-actions";

export async function NewProducts(): Promise<JSX.Element> {
  const products = await getNewProducts();

  return (
    <div className="recent-product">
      <div className="container">
        <div className="section-header">
          <h3>Recent Product</h3>
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
