import { Suspense, JSX } from "react";
import { cookies } from "next/headers";
import { ProductsTable, AddProduct } from "@/components/dashboard-components";
import { OnlyPageSearchParams } from "@/types/component-types";
import { TableLoading } from "@/components/shared-components";
import { getProducts } from "@/actions/products-actions";
import { authUtils } from "@/utils/auth-utils";

export default async function Products({
  searchParams,
}: OnlyPageSearchParams): Promise<JSX.Element> {
  const cookieStore = cookies();
  const page = +searchParams.page || 1;
  authUtils.requireAuth(cookieStore);

  const { products, pageCount } = await getProducts(page);

  return (
    <main className="dashboard_main">
      <AddProduct />
      <Suspense fallback={<TableLoading />}>
        <ProductsTable page={page} products={products} pageCount={pageCount} />
      </Suspense>
    </main>
  );
}
