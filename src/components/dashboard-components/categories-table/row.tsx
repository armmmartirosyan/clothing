import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { DeleteCell } from "@/components/shared-components";
import { deleteCategory } from "@/actions/categories-actions";
import { EditCell } from "./components";
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
      <DeleteCell id={category.id} action={deleteCategory} />
      <EditCell category={category} />
    </TableRow>
  );
}
