import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import { deleteProduct } from "@/actions/products-actions";

export function DeleteCell({ productId }: { productId: string }) {
  return (
    <TableCell onClick={() => deleteProduct(productId)}>
      <DeleteIcon sx={{ cursor: "pointer" }} />
    </TableCell>
  );
}
