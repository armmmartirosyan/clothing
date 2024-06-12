import { Suspense, JSX } from "react";
import { cookies } from "next/headers";
import { CarouselList, AddCarousel } from "@/components/dashboard-components";
import { TableLoading } from "@/components/shared-components";
import { authUtils } from "@/utils/auth-utils";

export default function Carousel(): JSX.Element {
  const cookieStore = cookies();
  authUtils.requireAuth(cookieStore);

  return (
    <main className="dashboard_main">
      <AddCarousel />
      <Suspense fallback={<TableLoading />}>
        <CarouselList />
      </Suspense>
    </main>
  );
}
