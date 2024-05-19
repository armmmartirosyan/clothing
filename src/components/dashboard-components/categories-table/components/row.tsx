import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { DeleteCell, EditCell } from "./index";
import { ICategory } from "@/types";

export function Row({ category }: { category: ICategory }) {
  return (
    <TableRow hover tabIndex={-1} role="checkbox" key={category.id}>
      <TableCell>{category.id}</TableCell>
      <TableCell>
        <img
          src={category.imageUrl}
          style={{ objectFit: "contain" }}
          alt={category.name}
          width={100}
          height={100}
        />
      </TableCell>
      <TableCell>{category.name}</TableCell>
      <DeleteCell categoryId={category.id} />
      <EditCell category={category} />
    </TableRow>
  );
}
