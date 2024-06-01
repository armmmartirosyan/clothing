"use client";

import { JSX } from "react";
import { Carousel as NukaCarousel } from "nuka-carousel";
import { BannerCarouselProps } from "@/types/component-types";
import styles from "./index.module.css";

export function Carousel({ carousel }: BannerCarouselProps): JSX.Element {
  return (
    <NukaCarousel
      className={styles.main_slider}
      autoplayInterval={5000}
      scrollDistance="slide"
      showArrows
      showDots
      autoplay
    >
      {carousel.map((carouselItem) => (
        <figure className={styles.item} key={carouselItem.id}>
          <img
            src={carouselItem.imageUrl}
            className={styles.image}
            alt={carouselItem.title}
          />
        </figure>
      ))}
    </NukaCarousel>
  );
}
