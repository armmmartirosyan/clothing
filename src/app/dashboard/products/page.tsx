import { cookies } from "next/headers";
import { authUtils } from "@/utils/auth-utils";

export default function Dashboard() {
  const cookieStore = cookies();
  authUtils.requireAuth(cookieStore);

  return (
    <main>
      <h2></h2>
    </main>
  );
}
