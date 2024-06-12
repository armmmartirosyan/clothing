import { Suspense, JSX } from "react";
import { cookies } from "next/headers";
import { authUtils } from "@/utils/auth-utils";
import { TableLoading } from "@/components/shared-components";
import { CategoriesList, AddCategory } from "@/components/dashboard-components";

export default function Categories(): JSX.Element {
  const cookieStore = cookies();
  authUtils.requireAuth(cookieStore);

  return (
    <main className="dashboard_main">
      <AddCategory />
      <Suspense fallback={<TableLoading />}>
        <CategoriesList />
      </Suspense>
    </main>
  );
}
