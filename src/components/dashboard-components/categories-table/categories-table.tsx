"use client";

import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { CATEGORIES_TABLE_COLUMNS } from "@/constants/shared-constants";
import { Row } from "./components";
import { Pagination } from "@/components/shared-components";
import { ICategory } from "@/types";

export function CategoriesTable({
  page,
  pageCount,
  categories,
}: {
  page: number;
  pageCount: number;
  categories: ICategory[];
}) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500 }}>
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
      <Pagination page={page} count={pageCount} />
    </Paper>
  );
}
