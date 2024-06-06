import { Suspense, JSX } from "react";
import { cookies } from "next/headers";
import { TableLoading } from "@/components/shared-components";
import { getCategories } from "@/actions/categories-actions";
import { authUtils } from "@/utils/auth-utils";
import {
  CategoriesTable,
  AddCategory,
} from "@/components/dashboard-components";

export default async function Categories(): Promise<JSX.Element> {
  const cookieStore = cookies();
  authUtils.requireAuth(cookieStore);

  const categories = await getCategories();

  return (
    <main className="dashboard_main">
      <AddCategory />
      <Suspense fallback={<TableLoading />}>
        <CategoriesTable categories={categories} />
      </Suspense>
    </main>
  );
}
