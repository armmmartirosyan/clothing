import { ReactNode, RefObject } from "react";
import { ICarousel, ICategory, INavItem, IProduct } from "./index";
import { GenericActionReturn } from "./action-types";

export type ProductsListInObject = { products: IProduct[] };

export type OnlyCategoryInProps = { category: ICategory };

export type OnlyProductInObject = { product: IProduct };

export type OnlyChildrenProps = { children: ReactNode };

export type CategorySelectProps = { defaultValue: string };

export type NavItemProps = { navItem: INavItem };

export type BannerCarouselProps = { carousel: ICarousel[] };

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

export type CloseIconProps = {
  onClick: Function;
  [key: string]: unknown;
};

export type ProductsListProps = {
  page: number;
};

export type ProductEditModalProps = {
  dialogRef: RefObject<HTMLDialogElement>;
  product: IProduct;
};

export type CategoryEditModalProps = {
  dialogRef: RefObject<HTMLDialogElement>;
  category: ICategory;
};

export type CarouselEditModalProps = {
  dialogRef: RefObject<HTMLDialogElement>;
  carouselItem: ICarousel;
};

export type OnlyCarouselInProps = {
  carouselItem: ICarousel;
};

export type OnlyDialogRefProps = {
  dialogRef: RefObject<HTMLDialogElement>;
};
