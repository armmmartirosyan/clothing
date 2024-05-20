import { ICategoryColumn } from "@/types";

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

export const CATEGORIES_TABLE_COLUMNS: readonly ICategoryColumn[] = [
  { id: 1, label: "ID", minWidth: 100 },
  { id: 2, label: "Image", minWidth: 170 },
  { id: 3, label: "Category Name", minWidth: 100 },
  { id: 4, label: "", minWidth: 100 },
  { id: 5, label: "", minWidth: 100 },
];