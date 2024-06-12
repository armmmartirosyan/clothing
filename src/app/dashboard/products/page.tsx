import { Suspense, JSX } from "react";
import { cookies } from "next/headers";
import { ProductsList, AddProduct } from "@/components/dashboard-components";
import { OnlyPageSearchParams } from "@/types/component-types";
import { TableLoading } from "@/components/shared-components";
import { authUtils } from "@/utils/auth-utils";

export default function Products({
  searchParams,
}: OnlyPageSearchParams): JSX.Element {
  const cookieStore = cookies();
  const page = +searchParams.page || 1;
  authUtils.requireAuth(cookieStore);

  return (
    <main className="dashboard_main">
      <AddProduct />
      <Suspense fallback={<TableLoading />}>
        <ProductsList page={page} />
      </Suspense>
    </main>
  );
}
