import { JSX } from "react";
import { CarouselTable } from "./carousel-table";
import { getCarousel } from "@/actions/carousel-actions";

export async function CarouselList(): Promise<JSX.Element> {
  const carousel = await getCarousel();

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <CarouselTable carousel={carousel} />
    </div>
  );
}
