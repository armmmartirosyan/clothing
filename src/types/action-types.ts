import { ICarousel, ICategory, IProduct } from "./index";

export type GenericActionReturn = { error: any };

export type EditActionArgs = {
  id: string;
  formData: FormData;
};

export type GetProductsActionReturn = {
  products: IProduct[];
  pageCount: number;
};

export type GetProductByIdActionReturn = IProduct | null;

export type GetProductsByCategoryActionReturn = IProduct[];

export type GetCategoriesActionReturn = {
  categories: ICategory[];
  pageCount: number;
};

export type GetCarouselAction = ICarousel[];

export type UploadImageReturn = {
  url: string;
  size: number;
  metadata: Record<string, never>;
  path: Record<string, never>;
  pathOrder: string[];
};
