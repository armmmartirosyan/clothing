import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import { deleteCarousel } from "@/actions/carousel-actions";

export function DeleteCell({ carouselItemId }: { carouselItemId: string }) {
  return (
    <TableCell onClick={() => deleteCarousel(carouselItemId)}>
      <DeleteIcon sx={{ cursor: "pointer" }} />
    </TableCell>
  );
}
