"use client";

import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { CATEGORIES_TABLE_COLUMNS } from "@/constants/shared-constants";
import { ICategory } from "@/types";
import { Row } from "./row";

export function CategoriesTable({ categories }: { categories: ICategory[] }) {
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
    </Paper>
  );
}
