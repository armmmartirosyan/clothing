"use client";

import { ChangeEvent, JSX } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Pagination as MUIPagination } from "@mui/material";
import { PaginationProps } from "@/types/component-types";

export function Pagination({ page, count }: PaginationProps): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (_: ChangeEvent<unknown>, page: number) => {
    router.push(pathname + "?page=" + page);
  };

  if (count <= 1) {
    return <></>;
  }

  return <MUIPagination count={count} page={page} onChange={handleChange} />;
}
