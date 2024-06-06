import { ReactNode } from "react";
import { ICarousel, IProduct } from "./index";
import { GenericActionReturn } from "./action-types";

export type PageSearchParams = {
  [key: string]: string;
};

export type PaginationProps = {
  page: number;
  count: number;
};

export type OnlyPageSearchParams = {
  searchParams: PageSearchParams;
};

export type NewProductsCarouselProps = { products: IProduct[] };

export type BannerCarouselProps = { carousel: ICarousel[] };

export type OnlyChildrenProps = { children: ReactNode };

export type ProductCardProps = { product: IProduct };

export type ProductPageProps = {
  params: { id: string };
};

export type RelatedProductsProps = {
  categoryId: string;
};

export type DeleteCellProps = {
  id: string;
  action: (productId: string) => Promise<GenericActionReturn>;
};
