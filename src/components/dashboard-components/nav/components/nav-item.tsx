"use client";

import { usePathname } from "next/navigation";
import Button from "@mui/material/Button";
import { useMemo } from "react";
import Link from "next/link";
import { INavItem } from "@/types";

export function NavItem({ navItem }: { navItem: INavItem }) {
  const { path, name } = navItem;
  const pathName = usePathname();

  const variant = useMemo(() => {
    return pathName.includes(path) ? "contained" : "outlined";
  }, [pathName, path]);

  return (
    <Link href={path} key={name}>
      <Button variant={variant}>{name}</Button>
    </Link>
  );
}
