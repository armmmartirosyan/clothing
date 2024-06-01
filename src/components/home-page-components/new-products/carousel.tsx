"use client";

import { JSX } from "react";
import { Carousel as NukaCarousel } from "nuka-carousel";
import { NewProductsCarouselProps } from "@/types/component-types";
import { ProductCard } from "./product-card";

export function Carousel({ products }: NewProductsCarouselProps): JSX.Element {
  return (
    <>
      <NukaCarousel showDots showArrows>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </NukaCarousel>
    </>
  );
}
