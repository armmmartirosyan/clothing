import { Suspense } from "react";
import { cookies } from "next/headers";
import { CategoriesTable } from "@/components/dashboard-components/categories-table";
import { authUtils } from "@/utils/auth-utils";
import { IPageSearchParams } from "@/types";
import styles from "@/styles/dashboard.module.css";

export default function Dashboard({
  searchParams,
}: {
  searchParams: IPageSearchParams;
}) {
  const cookieStore = cookies();
  const page = +searchParams.page || 1;
  authUtils.requireAuth(cookieStore);

  return (
    <main className={styles.main}>
      <Suspense fallback="Loading...">
        <CategoriesTable page={page} />
      </Suspense>
    </main>
  );
}
