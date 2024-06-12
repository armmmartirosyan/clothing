"use client";

import { JSX } from "react";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import { PRODUCTS_TABLE_COLUMNS } from "@/constants/shared-constants";
import { ProductsListInObject } from "@/types/component-types";
import { Row } from "./row";

export function ProductsTable({ products }: ProductsListInObject): JSX.Element {
  return (
    <TableContainer>
      <Table aria-label="sticky table">
        <TableHead>
          <TableRow>
            {PRODUCTS_TABLE_COLUMNS.map((column) => (
              <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <Row product={product} key={product.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
