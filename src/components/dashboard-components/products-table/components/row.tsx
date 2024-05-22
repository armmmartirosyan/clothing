import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { DeleteCell, EditCell } from "./index";
import { IProduct } from "@/types";

export function Row({ product }: { product: IProduct }) {
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
      <DeleteCell productId={product.id} />
      <EditCell product={product} />
    </TableRow>
  );
}
