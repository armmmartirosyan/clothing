import { Suspense } from "react";
import { cookies } from "next/headers";
import { ProductsTable } from "@/components/dashboard-components";
import { AddProduct } from "@/components/dashboard-components";
import { getProducts } from "@/actions/products-actions";
import { authUtils } from "@/utils/auth-utils";
import { IPageSearchParams } from "@/types";
import styles from "@/styles/dashboard.module.css";

export default async function Products({
  searchParams,
}: {
  searchParams: IPageSearchParams;
}) {
  const cookieStore = cookies();
  const page = +searchParams.page || 1;
  authUtils.requireAuth(cookieStore);

  const { products, pageCount } = await getProducts(page);

  return (
    <main className={styles.main}>
      <AddProduct />
      <Suspense fallback="Loading...">
        <ProductsTable page={page} products={products} pageCount={pageCount} />
      </Suspense>
    </main>
  );
}
