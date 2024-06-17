"use client";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import { JSX, useLayoutEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import { CATEGORIES_TABLE_COLUMNS } from "@/constants/shared-constants";
import { CategoriesListInObject } from "@/types/component-types";
import { Row } from "./row";

export function CategoriesTable({
  categories,
}: CategoriesListInObject): JSX.Element {
  const [isClient, setIsClient] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <TableContainer>
          <Table aria-label="sticky table">
            <TableHead>
              <TableRow>
                {CATEGORIES_TABLE_COLUMNS.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category) => (
                <Row category={category} key={category.id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
