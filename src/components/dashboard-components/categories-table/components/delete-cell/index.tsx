import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import { deleteCategory } from "@/actions/categories-actions";

export function DeleteCell({ categoryId }: { categoryId: string }) {
  const handleDelete = async () => {
    const { error } = await deleteCategory(categoryId);

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
