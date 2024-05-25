import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Pagination as MUIPagination } from "@mui/material";

export function Pagination({ page, count }: { page: number; count: number }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (_: ChangeEvent<unknown>, page: number) => {
    router.push(pathname + "?page=" + page);
  };

  if (count <= 1) {
    return <></>;
  }

  return <MUIPagination count={count} page={page} onChange={handleChange} />;
}
