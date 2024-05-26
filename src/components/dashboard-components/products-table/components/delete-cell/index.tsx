import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import { deleteProduct } from "@/actions/products-actions";

export function DeleteCell({ productId }: { productId: string }) {
  const handleDelete = async () => {
    const { error } = await deleteProduct(productId);

    if (error) {
      alert(error);
    }
  };

  return (
    <TableCell onClick={handleDelete}>
      <DeleteIcon sx={{ cursor: "pointer" }} />
    </TableCell>
  );
}
