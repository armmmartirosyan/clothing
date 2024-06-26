import { JSX } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { DeleteCell } from "@/components/shared-components";
import { deleteProduct } from "@/actions/products-actions";
import { OnlyProductInObject } from "@/types/component-types";
import { EditCell } from "./edit-cell";

export function Row({ product }: OnlyProductInObject): JSX.Element {
  return (
    <TableRow hover tabIndex={-1} role="checkbox" key={product.id}>
      <TableCell>{product.id}</TableCell>
      <TableCell>
        <img
          src={product.imageUrl}
          style={{ objectFit: "contain" }}
          alt={product.name}
          width={100}
          height={100}
        />
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.description}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.oldPrice}</TableCell>
      <TableCell>{product.isNew ? "Yes" : "No"}</TableCell>
      <TableCell>{product.categoryId}</TableCell>
      <DeleteCell id={product.id} action={deleteProduct} />
      <EditCell product={product} />
    </TableRow>
  );
}
