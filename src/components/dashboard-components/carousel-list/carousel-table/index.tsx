"use client";

import { JSX } from "react";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { CAROUSEL_TABLE_COLUMNS } from "@/constants/shared-constants";
import { CarouselListInObject } from "@/types/component-types";
import { Row } from "./row";

export function CarouselTable({ carousel }: CarouselListInObject): JSX.Element {
  return (
    <TableContainer>
      <Table aria-label="sticky table">
        <TableHead>
          <TableRow>
            {CAROUSEL_TABLE_COLUMNS.map((column) => (
              <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
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
  );
}
