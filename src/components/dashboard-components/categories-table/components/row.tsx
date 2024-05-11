import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import { stringUtils } from "@/utils/string-utils";
import { ICategory } from "@/types";

export function Row({ category }: { category: ICategory }) {
  return (
    <TableRow hover tabIndex={-1} role="checkbox" key={category.id}>
      <TableCell>{category.id}</TableCell>
      <TableCell>
        <Image
          src={stringUtils.normalizeImageSrc(category.imageUrl)}
          style={{ objectFit: "contain" }}
          alt={category.name}
          width={100}
          height={100}
        />
      </TableCell>
      <TableCell>{category.name}</TableCell>
    </TableRow>
  );
}
