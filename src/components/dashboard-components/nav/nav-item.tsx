"use client";

import { JSX } from "react";
import { usePathname } from "next/navigation";
import Button from "@mui/material/Button";
import { useMemo } from "react";
import Link from "next/link";
import { NavItemProps } from "@/types/component-types";

export function NavItem({ navItem }: NavItemProps): JSX.Element {
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
