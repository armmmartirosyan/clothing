"use client";

import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { PRODUCTS_TABLE_COLUMNS } from "@/constants/shared-constants";
import { Pagination, Row } from "./components";
import { IProduct } from "@/types";

export function ProductsTable({
  page,
  pageCount,
  products,
}: {
  page: number;
  pageCount: number;
  products: IProduct[];
}) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {PRODUCTS_TABLE_COLUMNS.map((column) => (
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
            {products.map((product) => (
              <Row product={product} key={product.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination page={page} count={pageCount} />
    </Paper>
  );
}
