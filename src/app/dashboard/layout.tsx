import { JSX } from "react";
import { Nav } from "@/components/dashboard-components";
import { OnlyChildrenProps } from "@/types/component-types";

export default function DashboardLayout({
  children,
}: Readonly<OnlyChildrenProps>): JSX.Element {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
