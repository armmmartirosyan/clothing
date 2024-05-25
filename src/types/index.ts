import { NextResponse } from "next/server";

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

export interface ICarousel {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
}

export type GetCategoriesApiReturn = NextResponse<ICategory[]>;
