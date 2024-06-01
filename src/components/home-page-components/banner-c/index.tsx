import { JSX } from "react";
import { Carousel } from "./carousel";
import { getCarousel } from "@/actions/carousel-actions";

export async function Banner(): Promise<JSX.Element> {
  const carousel = await getCarousel();

  return (
    <div className="home-slider">
      <Carousel carousel={carousel} />
    </div>
  );
}
