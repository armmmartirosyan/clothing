import { IColumn } from "@/types";

export const LOGIN = "qwerpoiu";
export const PASS = "54d674q389w3e2rd90d";

export const AUTH_COOKIES = {
  name: "auth-cookies",
  value: "valid-auth-cookie",
};

export const ROWS_PER_PAGE = 20;

export const DASHBOARD_PAGES = [
  {
    name: "Products",
    path: "/dashboard/products",
  },
  {
    name: "Categories",
    path: "/dashboard/categories",
  },
];

export const INVALID_LOGIN_OR_PASS_ERROR = "Invalid login or password";

export const CATEGORIES_TABLE_COLUMNS: readonly IColumn[] = [
  { id: 1, label: "ID", minWidth: 100 },
  { id: 2, label: "Image", minWidth: 170 },
  { id: 3, label: "Category Name", minWidth: 100 },
  { id: 4, label: "", minWidth: 100 },
  { id: 5, label: "", minWidth: 100 },
];

export const PRODUCTS_TABLE_COLUMNS: readonly IColumn[] = [
  { id: 1, label: "ID", minWidth: 100 },
  { id: 2, label: "Image", minWidth: 170 },
  { id: 3, label: "Product Name", minWidth: 100 },
  { id: 4, label: "Description", minWidth: 100 },
  { id: 5, label: "Price", minWidth: 100 },
  { id: 6, label: "Old price", minWidth: 100 },
  { id: 7, label: "New", minWidth: 100 },
  { id: 8, label: "Category ID", minWidth: 100 },
  { id: 9, label: "", minWidth: 100 },
  { id: 10, label: "", minWidth: 100 },
];

export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
