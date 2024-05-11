export type AddPostActionType = (formData: FormData) => Promise<{ error: any }>;

export interface INavItem {
  name: string;
  path: string;
}

export interface ICategoryColumn {
  label: string;
  minWidth?: number;
}

export interface ICategory {
  id: string;
  name: string;
  imageUrl: string;
}

export interface IPageSearchParams {
  [key: string]: string;
}

export interface IGetCategoriesActionReturn {
  categories: ICategory[];
  pageCount: number;
}
