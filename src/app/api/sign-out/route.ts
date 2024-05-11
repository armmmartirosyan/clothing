import { AUTH_COOKIES } from "@/constants/shared-constants";
import { cookies } from "next/headers";

export async function DELETE() {
  cookies().delete(AUTH_COOKIES.name);

  return new Response("success", {
    status: 200,
  });
}
