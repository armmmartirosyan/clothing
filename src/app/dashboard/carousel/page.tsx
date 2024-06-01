import { Suspense, JSX } from "react";
import { cookies } from "next/headers";
import { CarouselTable } from "@/components/dashboard-components";
import { AddCarousel } from "@/components/dashboard-components";
import { getCarousel } from "@/actions/carousel-actions";
import { authUtils } from "@/utils/auth-utils";

export default async function Carousel(): Promise<JSX.Element> {
  const cookieStore = cookies();
  authUtils.requireAuth(cookieStore);

  const carousel = await getCarousel();

  return (
    <main className="dashboard_main">
      <AddCarousel />
      <Suspense fallback="Loading...">
        <CarouselTable carousel={carousel} />
      </Suspense>
    </main>
  );
}
