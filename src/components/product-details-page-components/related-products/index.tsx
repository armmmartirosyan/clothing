import { JSX } from "react";
import { getProductsByCategory } from "@/actions/products-actions";
import { type RelatedProductsProps } from "@/types/component-types";

export async function RelatedProducts({
  categoryId,
}: RelatedProductsProps): Promise<JSX.Element> {
  const relatedProducts = await getProductsByCategory(categoryId);

  return (
    <>
      <div className="container">
        <div className="section-header">
          <h3>Related Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            viverra at massa sit amet ultricies. Nullam consequat, mauris non
            interdum cursus
          </p>
        </div>
      </div>

      <div className="row align-items-center product-slider product-slider-3">
        {relatedProducts.map((product) => (
          <div className="col-lg-3" key={product.id}>
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src={product.imageUrl} alt="Product Image" />
                </a>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">{product.name}</a>
                </div>
                <div className="price">
                  {product.price}AMD <br />
                  {!!product.oldPrice && <span>{product.oldPrice}AMD</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
