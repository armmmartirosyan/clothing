import { cookies } from "next/headers";
import { AUTH_COOKIES } from "@/constants/shared-constants";

export async function DELETE(): Promise<Response> {
  cookies().delete(AUTH_COOKIES.name);

  return new Response("success", {
    status: 200,
  });
}
