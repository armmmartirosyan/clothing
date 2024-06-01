"use client";

import { IProduct } from "@/types";
import { Carousel as NukaCarousel } from "nuka-carousel";

export function Carousel({ products }: { products: IProduct[] }) {
  return (
    <NukaCarousel
      autoplay
      showDots
      className="row align-items-center product-slider product-slider-4"
    >
      {products.map((product) => (
        <div className="col-lg-3" key={product.id}>
          <div className="product-item">
            <div className="product-image">
              <a href="product-detail.html">
                <img src={product.imageUrl} alt={product.name} />
              </a>
              <div className="product-action">
                <a href="#">
                  <i className="fa fa-cart-plus"></i>
                </a>
                <a href="#">
                  <i className="fa fa-heart"></i>
                </a>
                <a href="#">
                  <i className="fa fa-search"></i>
                </a>
              </div>
            </div>
            <div className="product-content">
              <div className="title">
                <a href="#">{product.name}</a>
              </div>
              <div className="ratting">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </NukaCarousel>
  );
}
