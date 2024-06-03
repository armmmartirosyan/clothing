"use client";

import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { CAROUSEL_TABLE_COLUMNS } from "@/constants/shared-constants";
import { ICarousel } from "@/types";
import { Row } from "./row";

export function CarouselTable({ carousel }: { carousel: ICarousel[] }) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {CAROUSEL_TABLE_COLUMNS.map((column) => (
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
            {carousel.map((carouselItem) => (
              <Row carouselItem={carouselItem} key={carouselItem.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
