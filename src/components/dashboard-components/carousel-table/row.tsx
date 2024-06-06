import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { DeleteCell } from "@/components/shared-components";
import { deleteCarousel } from "@/actions/carousel-actions";
import { EditCell } from "./components";
import { ICarousel } from "@/types";

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
      <DeleteCell id={carouselItem.id} action={deleteCarousel} />
      <EditCell carouselItem={carouselItem} />
    </TableRow>
  );
}
