import { JSX } from "react";
import { ProductCardProps } from "@/types/component-types";
import styles from "./index.module.css";

export function ProductCard({ product }: ProductCardProps): JSX.Element {
  return (
    <div className={` ${styles.item}`}>
      <div className={`product-item ${styles.product_card}`}>
        <div className={`product-image ${styles.product_image}`}>
          <a href="product-detail.html">
            <img src={product.imageUrl} alt={product.name} />
          </a>
          <div className="product-action">
            <a href="#">
              <i className="fa fa-search"></i>
            </a>
          </div>
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
  );
}
