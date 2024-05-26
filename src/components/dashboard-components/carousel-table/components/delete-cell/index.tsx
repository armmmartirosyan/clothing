import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import { deleteCarousel } from "@/actions/carousel-actions";

export function DeleteCell({ carouselItemId }: { carouselItemId: string }) {
  const handleDelete = async () => {
    const { error } = await deleteCarousel(carouselItemId);

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
