import { JSX } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { OnlyCategoryInProps } from "@/types/component-types";
import { deleteCategory } from "@/actions/categories-actions";
import { DeleteCell } from "@/components/shared-components";
import { EditCell } from "./edit-cell";

export function Row({ category }: OnlyCategoryInProps): JSX.Element {
  return (
    <TableRow hover tabIndex={-1} role="checkbox" key={category.id}>
      <TableCell>{category.id}</TableCell>
      <TableCell>
        <img
          src={category.imageUrl}
          style={{ objectFit: "contain" }}
          alt={category.name}
          width={100}
          height={100}
        />
      </TableCell>
      <TableCell>{category.name}</TableCell>
      <DeleteCell id={category.id} action={deleteCategory} />
      <EditCell category={category} />
    </TableRow>
  );
}
