"use client";

import { JSX } from "react";
import Skeleton from "@mui/material/Skeleton";

export function TableLoading({ rowCount = 4 }): JSX.Element {
  const rows = [...new Array(rowCount)];

  return (
    <>
      {rows.map((_, index) => (
        <Skeleton key={Math.random() + "-" + index} />
      ))}
    </>
  );
}
