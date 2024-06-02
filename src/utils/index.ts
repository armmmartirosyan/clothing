import { GetProductsPageSearchParamsReturn } from "@/types";
import { PageSearchParams } from "@/types/component-types";

export function getProductsPageSearchParams(
  searchParams: PageSearchParams
): GetProductsPageSearchParamsReturn {
  const categoryIdString = searchParams["category-ids"];
  const page = +searchParams.page || 1;
  const search = searchParams.search;

  let categoryIds: string[] = [];

  if (categoryIdString) {
    categoryIds = categoryIdString.split(",");
  }

  return {
    categoryIds,
    search,
    page,
  };
}
