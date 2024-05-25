import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { DeleteCell, EditCell } from "./components";
import { ICarousel, IProduct } from "@/types";

export function Row({ carouselItem }: { carouselItem: ICarousel }) {
  return (
    <TableRow hover tabIndex={-1} role="checkbox">
      <TableCell>{carouselItem.id}</TableCell>
      <TableCell>
        <img
          src={carouselItem.imageUrl}
          style={{ objectFit: "contain" }}
          alt={carouselItem.title}
          width={100}
          height={100}
        />
      </TableCell>
      <TableCell>{carouselItem.title}</TableCell>
      <TableCell>{carouselItem.text}</TableCell>
      <DeleteCell carouselItemId={carouselItem.id} />
      <EditCell carouselItem={carouselItem} />
    </TableRow>
  );
}
