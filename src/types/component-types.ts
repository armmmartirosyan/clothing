import { ReactNode } from "react";

export type OnlyChildrenProps = { children: ReactNode };

export type PaginationProps = {
  page: number;
  count: number;
};

export type PageSearchParams = {
  [key: string]: string;
};

export type OnlyPageSearchParams = {
  searchParams: PageSearchParams;
};
