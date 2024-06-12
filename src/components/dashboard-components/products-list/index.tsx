import { JSX } from "react";
import Paper from "@mui/material/Paper";
import { Pagination } from "@/components/shared-components";
import { ProductsListProps } from "@/types/component-types";
import { getProducts } from "@/actions/products-actions";
import { ProductsTable } from "./products-table";

export async function ProductsList({
  page,
}: ProductsListProps): Promise<JSX.Element> {
  const { products, pageCount } = await getProducts(page);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <ProductsTable products={products} />
      <Pagination page={page} count={pageCount} />
    </Paper>
  );
}
