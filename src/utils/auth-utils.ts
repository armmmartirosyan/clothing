import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { redirect } from "next/navigation";
import { AUTH_COOKIES } from "@/constants/shared-constants";

class AuthUtils {
  public requireAuth(cookieStore: ReadonlyRequestCookies): void {
    const authCookie = cookieStore.get(AUTH_COOKIES.name);

    if (authCookie?.value !== AUTH_COOKIES.value) {
      redirect("/sign-in");
    }
  }

  public requireNotAuth(cookieStore: ReadonlyRequestCookies): void {
    const authCookie = cookieStore.get(AUTH_COOKIES.name);

    if (authCookie?.value === AUTH_COOKIES.value) {
      redirect("/dashboard/products");
    }
  }
}

export const authUtils = new AuthUtils();
