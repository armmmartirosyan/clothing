import { Nav } from "@/components/dashboard-components";
import { OnlyChildrenProps } from "@/types/component-types";

export default function DashboardLayout({
  children,
}: Readonly<OnlyChildrenProps>) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
