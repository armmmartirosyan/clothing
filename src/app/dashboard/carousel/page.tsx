import { Suspense } from "react";
import { cookies } from "next/headers";
import { CarouselTable } from "@/components/dashboard-components";
import { AddCarousel } from "@/components/dashboard-components";
import { getCarousel } from "@/actions/carousel-actions";
import { authUtils } from "@/utils/auth-utils";
import styles from "@/styles/dashboard.module.css";

export default async function Carousel() {
  const cookieStore = cookies();
  authUtils.requireAuth(cookieStore);

  const carousel = await getCarousel();

  return (
    <main className={styles.main}>
      <AddCarousel />
      <Suspense fallback="Loading...">
        <CarouselTable carousel={carousel} />
      </Suspense>
    </main>
  );
}
