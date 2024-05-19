import { Suspense } from "react";
import { cookies } from "next/headers";
import {
  CategoriesTable,
  AddCategory,
} from "@/components/dashboard-components";
import { getCategories } from "@/actions/categories-actions";
import { authUtils } from "@/utils/auth-utils";
import { IPageSearchParams } from "@/types";
import styles from "@/styles/dashboard.module.css";

export default async function Categories({
  searchParams,
}: {
  searchParams: IPageSearchParams;
}) {
  const cookieStore = cookies();
  const page = +searchParams.page || 1;
  authUtils.requireAuth(cookieStore);

  const { categories, pageCount } = await getCategories(page);

  return (
    <main className={styles.main}>
      <AddCategory />
      <Suspense fallback="Loading...">
        <CategoriesTable
          page={page}
          categories={categories}
          pageCount={pageCount}
        />
      </Suspense>
    </main>
  );
}
