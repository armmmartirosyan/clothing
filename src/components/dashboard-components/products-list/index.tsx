import { JSX } from "react";
import { Pagination } from "@/components/shared-components";
import { ProductsListProps } from "@/types/component-types";
import { getProducts } from "@/actions/products-actions";
import { ProductsTable } from "./products-table";

export async function ProductsList({
  page,
}: ProductsListProps): Promise<JSX.Element> {
  const { products, pageCount } = await getProducts(page);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <ProductsTable products={products} />
      <Pagination page={page} count={pageCount} />
    </div>
  );
}
