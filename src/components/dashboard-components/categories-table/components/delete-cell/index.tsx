import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import { deleteCategory } from "@/actions/categories-actions";

export function DeleteCell({ categoryId }: { categoryId: string }) {
  return (
    <TableCell onClick={() => deleteCategory(categoryId)}>
      <DeleteIcon sx={{ cursor: "pointer" }} />
    </TableCell>
  );
}
