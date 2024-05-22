export interface INavItem {
  name: string;
  path: string;
}

export interface IColumn {
  id: number;
  label: string;
  minWidth?: number;
}

export interface ICategory {
  id: string;
  name: string;
  imageUrl: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  isNew: boolean;
  categoryId: string;
  imageUrl: string;
}

export interface IPageSearchParams {
  [key: string]: string;
}

export interface IGetCategoriesActionReturn {
  categories: ICategory[];
  pageCount: number;
}

export interface IGetProductsActionReturn {
  products: IProduct[];
  pageCount: number;
}
