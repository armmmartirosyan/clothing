"use client";

import { Carousel as NukaCarousel } from "nuka-carousel";
import { ICarousel } from "@/types";
import styles from "./index.module.css";

export function Carousel({ carousel }: { carousel: ICarousel[] }) {
  return (
    <NukaCarousel
      className={styles.main_slider}
      autoplay
      showDots
      showArrows
      wrapMode="wrap"
      scrollDistance="slide"
    >
      {carousel.map((carouselItem) => (
        <img
          alt={carouselItem.title}
          src={carouselItem.imageUrl}
          key={carouselItem.id}
        />
      ))}
    </NukaCarousel>
  );
}
